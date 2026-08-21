<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rutas de camiones locales de Jilotepec</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <style>
        :root { 
            --bg: #ffffff; 
            --card: #161b22; 
            --border: #d0d7de;
            --text-main: #24292f;
            --accent: #0969da;
        }

        /* Variables CSS dinámicas para soportar el cambio visual sin romper tus estilos */
        body.dark-mode-active {
            --bg: #0d1117;
            --text-main: #c9d1d9;
            --border: #30363d;
        }
        body.dark-mode-active .dashboard {
            background: #0d1117 !important;
        }
        body.dark-mode-active .dashboard h2 {
            color: #f0f6fc !important;
        }

        body, html { margin: 0; padding: 0; height: 100%; background: var(--bg); color: var(--text-main); font-family: 'Segoe UI', sans-serif; overflow: hidden; }
        .app-wrapper { display: flex; flex-direction: column; height: 100vh; position: relative; }
        #map { flex: 0 0 50%; width: 100%; border-bottom: 2px solid var(--border); z-index: 1; }
        .dashboard { flex: 1; overflow-y: auto; padding: 25px; background: #ffffff; transition: background 0.25s ease; }
        
        .search-container { margin-bottom: 20px; position: relative; }
        .search-input {
            width: 100%; padding: 12px 16px; font-size: 14px; border: 1px solid var(--border);
            border-radius: 8px; background: #f6f8fa; color: var(--text-main); box-sizing: border-box;
            transition: all 0.25s ease;
        }
        body.dark-mode-active .search-input {
            background: #21262d;
        }
        .search-input:focus { outline: none; border-color: var(--accent); background: #ffffff; box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.3); }
        body.dark-mode-active .search-input:focus { background: #161b22; }

        .empresa-header {
            grid-column: 1 / -1; margin: 25px 0 12px 0; padding-bottom: 8px;
            border-bottom: 2px solid var(--accent); color: var(--accent); font-size: 1.1rem; font-weight: bold; text-transform: uppercase;
        }

        /* Grilla adaptativa base */
        .rutas-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 15px; }

        /* Estructura base de las tarjetas */
        .ruta-card {
            background: var(--card); border: 1px solid #30363d; border-radius: 12px;
            padding: 16px; display: flex; align-items: center; cursor: pointer;
            transition: all 0.25s ease; position: relative; opacity: 0.85; box-sizing: border-box;
        }
        .ruta-card:hover { transform: translateY(-3px); opacity: 1; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .ruta-card.active { opacity: 1 !important; transform: scale(1.02); box-shadow: 0 0 15px var(--active-color) !important; border: 2px solid var(--active-color) !important; }

        .rutas-grid.has-active .ruta-card:not(.active) { opacity: 0.35; }

        .ruta-icon {
            width: 46px; height: 46px; border-radius: 10px; display: flex;
            align-items: center; justify-content: center; font-weight: bold;
            font-size: 12px; color: white; margin-right: 15px; flex-shrink: 0; text-transform: uppercase;
        }

        .ruta-info { overflow: hidden; width: 100%; }
        /* Permitimos que en pantallas normales el texto largo se corte con puntos suspensivos elegantemente */
        .ruta-info h3 { margin: 0; font-size: 14px; font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .ruta-info p { margin: 4px 0 0; font-size: 12px; color: #8b949e; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        
        .ruta-meta-detalle { display: flex; gap: 8px; margin-top: 6px; font-size: 11px; color: #58a6ff; flex-wrap: wrap; }
        .meta-item { background: rgba(88, 166, 255, 0.1); padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(88, 166, 255, 0.15); display: inline-flex; align-items: center; }

        /* Estilo de Pines A y B */
        .custom-marker-pin { display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 11px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.3); }
        
        .leaflet-popup-content-wrapper { background: var(--card); color: white; border-radius: 8px; }
        .leaflet-popup-tip { background: var(--card); }
        .popup-title { font-size: 14px; margin-bottom: 2px; display: block; font-weight: bold; }

        /* Animación del Aviso de Privacidad / Deslinde */
        @keyframes destello-alerta {
            0% { text-shadow: 0 0 2px rgba(248, 81, 73, 0.4); opacity: 0.8; }
            50% { text-shadow: 0 0 12px rgba(248, 81, 73, 1), 0 0 20px rgba(248, 81, 73, 0.6); opacity: 1; color: #ff6e67; }
            100% { text-shadow: 0 0 2px rgba(248, 81, 73, 0.4); opacity: 0.8; }
        }

        #abrir-aviso-legal {
            animation: destello-alerta 2.5s infinite ease-in-out;
            padding: 2px 6px; background: rgba(248, 81, 73, 0.1);
            border-radius: 4px; border: 1px solid rgba(248, 81, 73, 0.2); transition: all 0.3s;
        }
        #abrir-aviso-legal:hover {
            animation: none; background: rgba(248, 81, 73, 0.3); color: #ffffff !important; box-shadow: 0 0 10px rgba(230, 24, 13, 0.8);
        }

        /* Tarjeta Flotante de Referencias (Inicio / Fin) */
        .map-legend-card {
            position: absolute; top: 20px; left: 20px; z-index: 1000;
            background: #161b22; border: 1px solid #30363d; border-radius: 8px;
            padding: 14px 15px 12px 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.4);
            font-family: 'Segoe UI', sans-serif; color: #c9d1d9; width: 190px;
            transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .map-legend-title {
            font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;
            color: #8b949e; margin-bottom: 8px; border-bottom: 1px solid #30363d; padding-bottom: 4px;
        }
        .legend-item { display: flex; align-items: center; margin-bottom: 6px; font-size: 12px; }
        .legend-item:last-child { margin-bottom: 0; }
        .legend-badge {
            width: 20px; height: 20px; border-radius: 50%; border: 1px solid #fff; color: #fff;
            font-weight: bold; font-size: 11px; display: flex; align-items: center; justify-content: center;
            margin-right: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        /* Botón de Modo Oscuro */
        .btn-dark-mode-toggle {
            position: absolute; top: 15px; right: 60px; z-index: 1000;
            background: #ffffff; color: #24292f; border: 1px solid #d0d7de;
            border-radius: 6px; padding: 6px 12px; font-size: 12px; font-weight: 600;
            cursor: pointer; display: flex; align-items: center; gap: 6px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1); transition: all 0.2s ease;
        }
        .btn-dark-mode-toggle:hover { background: #f6f8fa; transform: translateY(-1px); }
        body.dark-mode-active .btn-dark-mode-toggle {
            background: #21262d; color: #c9d1d9; border-color: #30363d;
        }
        body.dark-mode-active .btn-dark-mode-toggle:hover { background: #30363d; }


        /* =========================================================================
           CRÍTICO: SECCIÓN DE OPTIMIZACIÓN AVANZADA PARA DISPOSITIVOS MÓVILES 
           ========================================================================= */
        @media (max-width: 768px) {
            /* NUEVA PROPORCIÓN: 60% el mapa y 40% el panel de control (tarjetas) abajo */
            #map { 
                flex: 0 0 60% !important; 
            }
            .dashboard { 
                flex: 0 0 40% !important; 
                padding: 12px 15px; 
                position: relative; 
                box-sizing: border-box;
            }
            
            .dashboard h2 { 
                font-size: 1.1rem; 
                margin-top: 0;
                margin-bottom: 8px !important; 
                text-align: center; 
            }

            /* Fijar la barra de búsqueda para que no se pierda al deslizar las tarjetas */
            .search-container {
                position: sticky;
                top: -12px; /* Compensa el padding superior del dashboard */
                background: #ffffff;
                z-index: 1001;
                padding: 8px 0;
                margin-bottom: 12px;
                border-bottom: 1px solid var(--border);
            }
            body.dark-mode-active .search-container {
                background: #0d1117;
            }

            /* Grilla fluida de una sola columna ajustada al espacio disponible */
            .rutas-grid {
                grid-template-columns: 1fr !important; 
                gap: 8px;
            }

            /* Tarjetas más compactas para aprovechar mejor el 40% de pantalla */
            .ruta-card {
                padding: 8px 10px;
                border-radius: 8px;
            }
            .ruta-card.active {
                transform: scale(1.01);
            }

            .ruta-icon {
                width: 36px;
                height: 36px;
                font-size: 10px;
                margin-right: 8px;
            }

            .ruta-info h3 {
                font-size: 12.5px;
                white-space: normal;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .ruta-info p {
                font-size: 10.5px;
            }

            .ruta-meta-detalle {
                gap: 4px;
                margin-top: 2px;
            }
            .meta-item {
                font-size: 9.5px;
                padding: 1px 3px;
            }

            /* Reubicación dinámica de la leyenda flotante (A y B) sobre el nuevo tamaño del mapa */
            .map-legend-card {
                top: auto; 
                bottom: 42%; /* Ajustado automáticamente al 60% del mapa */
                left: 10px;
                width: calc(100% - 60px); 
                max-width: 210px;
                padding: 8px 10px 6px 10px;
                font-size: 11px;
            }
            
            #abrir-leyenda {
                top: auto !important; 
                bottom: 42% !important; /* Ajustado automáticamente al 60% del mapa */
                left: 10px !important;
            }

            /* Botón de modo oscuro a la izquierda para que deje libre el Zoom (+ / -) */
            .btn-dark-mode-toggle {
                top: 10px; 
                left: 10px; 
                right: auto;
                padding: 5px 10px; 
                font-size: 11px;
            }

            /* Optimización del texto de la nota legal para que no sature la barra de atribuciones */
            #abrir-aviso-legal {
                font-size: 9px !important;
                padding: 2px 4px !important;
            }
        }
    </style>
</head>
<body>

<div class="app-wrapper">
    <button id="dark-mode-trigger" class="btn-dark-mode-toggle">🌙 Modo Oscuro</button>

    <div id="map"></div>

    <div class="map-legend-card" id="leyenda-referencias">
        <button id="cerrar-leyenda" style="position: absolute; top: 4px; right: 8px; background: none; border: none; color: #8b949e; cursor: pointer; font-size: 16px; font-weight: bold; padding: 0;">&times;</button>
        <div class="map-legend-title">Referencias de Ruta</div>
        <div class="legend-item">
            <div class="legend-badge" style="background-color: #2ea44f;">A</div>
            <span>Inicio de la Ruta</span>
        </div>
        <div class="legend-item">
            <div class="legend-badge" style="background-color: #f85149;">B</div>
            <span>Destino</span>
        </div>
    </div>

    <button id="abrir-leyenda" style="position: absolute; top: 20px; left: 20px; z-index: 1000; background: #161b22; border: 1px solid #30363d; border-radius: 50%; width: 34px; height: 34px; color: #c9d1d9; cursor: pointer; font-weight: bold; display: none; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.4);" title="Mostrar referencias">
        ℹ️
    </button>

    <div class="dashboard">
        <h2>Rutas de camiones locales de Jilotepec</h2>
        
        <div class="search-container">
            <input type="text" id="search-route-input" class="search-input" placeholder="Buscar por origen, destino o concesionario..." autocomplete="off">
        </div>

        <div class="rutas-grid" id="rutas-container"></div>
    </div>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
    const map = L.map('map', { zoomControl: false }).setView([19.9525, -99.5292], 12);
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Configuración de capas base independientes para el cambio de modo estético sin afectar los trazos
    const capaClara = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 19,
        attribution: '© OpenStreetMap | <a href="#" id="abrir-aviso-legal" style="color: #f85149; font-weight: 600; text-decoration: none;">⚠️ Nota Importante sobre Concesiones</a>'
    });

    const capaOscura = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap & © CartoDB | <a href="#" id="abrir-aviso-legal" style="color: #f85149; font-weight: 600; text-decoration: none;">⚠️ Nota Importante sobre Concesiones</a>'
    });

    // Se inicializa en modo claro por defecto
    capaClara.addTo(map);

    // Ventana modal del aviso legal
    const modalLegal = document.createElement('div');
    modalLegal.id = 'modal-legal-container';
    modalLegal.style.cssText = `
        display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.7); z-index: 9999; align-items: center; justify-content: center;
    `;

    modalLegal.innerHTML = `
        <div style="background: #161b22; color: #c9d1d9; max-width: 550px; padding: 25px; border-radius: 10px; border: 1px solid #30363d; box-shadow: 0 10px 25px rgba(0,0,0,0.5); font-family: 'Segoe UI', sans-serif; position: relative;">
            <h3 style="margin-top: 0; color: #f85149; font-size: 16px; border-bottom: 1px solid #30363d; padding-bottom: 10px; text-transform: uppercase;">⚠️ NOTA IMPORTANTE</h3>
            <p style="font-size: 13px; line-height: 1.5; margin: 15px 0;">La información sobre rutas de transporte público contenida en este sitio tiene carácter exclusivamente referencial y ha sido publicada con el propósito de orientar a la ciudadanía.</p>
            <p style="font-size: 13px; line-height: 1.5; margin: 15px 0;">Su inclusión en el portal oficial del Ayuntamiento de Jilotepec no implica, en ningún caso, reconocimiento, aval ni validación del estatus legal o vigencia de la concesión correspondiente.</p>
            <p style="font-size: 13px; line-height: 1.5; margin: 15px 0;">Para consultar el estatus oficial de las concesiones de transporte, los interesados deberán dirigirse a la autoridad competente en materia de movilidad y transporte del Estado de México.</p>
            <button id="cerrar-aviso-legal" style="background: #21262d; color: #c9d1d9; border: 1px solid #30363d; padding: 8px 16px; border-radius: 6px; cursor: pointer; float: right; font-weight: bold; font-size: 13px;">Entendido</button>
            <div style="clear: both;"></div>
        </div>
    `;
    document.body.appendChild(modalLegal);

    const lineasGroup = L.layerGroup().addTo(map);
    const marcadoresGroup = L.layerGroup().addTo(map);
    const rutasEnMemoria = {}; 

    fetch('api_transporte.php?t=' + new Date().getTime())
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('rutas-container');
            if(!data.features || data.features.length === 0) {
                container.innerHTML = "<p style='color:#8b949e; padding:15px;'>No se encontraron rutas activas en la base de datos.</p>";
                return;
            }

            const grupos = {};
            data.features.forEach(f => {
                const empresa = f.properties.empresa || "Concesionario no asignado";
                if (!grupos[empresa]) grupos[empresa] = [];
                grupos[empresa].push(f);
            });

            for (const empresa in grupos) {
                const header = document.createElement('div');
                header.className = 'empresa-header';
                header.innerHTML = ` ${empresa}`;
                container.appendChild(header);

                grupos[empresa].forEach(feature => {
                    const p = feature.properties;
                    const color = p.color || '#3498db';
                    const coordinates = feature.geometry?.coordinates;

                    const diasServicio = p.dias || 'Lun - Dom';
                    const horarioServicio = p.horario || '06:00 - 20:00';

                    let layerGeoJSON = null;
                    let marcadorA = null;
                    let marcadorB = null;

                    if (coordinates && coordinates.length >= 2) {
                        layerGeoJSON = L.geoJSON(feature, {
                            style: { color: color, weight: 7, opacity: 0.95, lineJoin: 'round' }
                        }).bindPopup(`
                            <div style="min-width:180px;">
                                <b class="popup-title" style="color:${color}">${p.nombre}</b>
                                <small style="color:#e1e4e8; display:block; margin-top:2px;">${p.empresa}</small>
                                <hr style="border:0; border-top:1px solid #30363d; margin:5px 0;">` +
                                
                                /* ===========================================================
                                ZONA DE COMENTARIOS / AMPLIACIÓN FUTURA
                                ===========================================================
                                Aquí puedes descomentar o agregar más información de la ruta 
                                usando las propiedades de la base de datos (ejemplo: p.tu_nueva_columna)
                                
                                <span style="font-size:11px; display:block; color:#58a6ff;"><b>📅 Días:</b> ${diasServicio}</span>
                                <span style="font-size:11px; display:block; color:#58a6ff;"><b>⏰ Horas:</b> ${horarioServicio}</span>
                                ===========================================================
                                */
                                
                            `</div>
                        `);

                        const primerPunto = coordinates[0]; 
                        const ultimoPunto = coordinates[coordinates.length - 1];

                        marcadorA = L.marker([primerPunto[1], primerPunto[0]], {
                            icon: L.divIcon({
                                className: '', iconSize: [24, 24],
                                html: `<div class="custom-marker-pin" style="background-color: #2ea44f; width:24px; height:24px;">A</div>`
                            })
                        }).bindPopup(`<b>Inicio de Ruta:</b> ${p.nombre}`);

                        marcadorB = L.marker([ultimoPunto[1], ultimoPunto[0]], {
                            icon: L.divIcon({
                                className: '', iconSize: [24, 24],
                                html: `<div class="custom-marker-pin" style="background-color: #f85149; width:24px; height:24px;">B</div>`
                            })
                        }).bindPopup(`<b>Fin de Ruta (Terminal):</b> ${p.nombre}`);

                        rutasEnMemoria[p.id] = { linea: layerGeoJSON, inicio: marcadorA, fin: marcadorB };
                    }

                    const card = document.createElement('div');
                    card.className = 'ruta-card';
                    card.setAttribute('data-nombre', p.nombre.toLowerCase());
                    card.setAttribute('data-empresa', p.empresa.toLowerCase());
                    
                    card.style.borderLeft = `6px solid ${color}`;
                    card.style.setProperty('--active-color', color);
                    
                    const iniciales = p.empresa.split(' ')
                        .filter(w => w.length > 2 && !w.includes('.') && w.toLowerCase() !== 'ruta')
                        .map(word => word.charAt(0)).join('').substring(0, 3);

                    card.innerHTML = `
                        <div class="ruta-icon" style="background:${color}; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">
                            ${iniciales || 'RT'}
                        </div>
                        <div class="ruta-info">
                            <h3 title="${p.nombre}">${p.nombre}</h3>
                            <p style="color: #c9d1d9;">${p.empresa}</p>
                            <div class="ruta-meta-detalle">
                                <span class="meta-item">📅 ${diasServicio}</span>
                                <span class="meta-item">⏰ ${horarioServicio}</span>
                            </div>
                        </div>
                    `;
                    
                    // Comportamiento Toggle (Interruptor inteligente)
                    card.onclick = (e) => {
                        const yaEstabaActiva = card.classList.contains('active');

                        if (yaEstabaActiva) {
                            container.classList.remove('has-active');
                            card.classList.remove('active');
                            
                            lineasGroup.clearLayers();
                            marcadoresGroup.clearLayers();
                        } else {
                            document.querySelectorAll('.ruta-card').forEach(c => c.classList.remove('active'));
                            container.classList.add('has-active');
                            card.classList.add('active');

                            lineasGroup.clearLayers();
                            marcadoresGroup.clearLayers();

                            const objetoRuta = rutasEnMemoria[p.id];
                            if(objetoRuta) {
                                lineasGroup.addLayer(objetoRuta.linea);
                                if(objetoRuta.inicio) marcadoresGroup.addLayer(objetoRuta.inicio);
                                if(objetoRuta.fin) marcadoresGroup.addLayer(objetoRuta.fin);
                                map.fitBounds(objetoRuta.linea.getBounds(), { padding: [50, 50] });
                                objetoRuta.linea.openPopup();
                            } else {
                                alert("Esta ruta tiene datos informativos pero no cuenta con un trazo geométrico en el mapa todavía.");
                            }
                        }
                        
                        e.stopPropagation(); 
                    };
                    
                    container.appendChild(card);
                });
            }

            // Motor del buscador en tiempo real
            const searchInput = document.getElementById('search-route-input');
            searchInput.addEventListener('input', function() {
                const query = this.value.toLowerCase().trim();
                const cards = document.querySelectorAll('.ruta-card');
                const headers = document.querySelectorAll('.empresa-header');

                cards.forEach(card => {
                    const nombre = card.getAttribute('data-nombre') || '';
                    const empresa = card.getAttribute('data-empresa') || '';
                    if (nombre.includes(query) || empresa.includes(query)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });

                headers.forEach(header => {
                    let nextEl = header.nextElementSibling;
                    let hasVisibleCard = false;
                    while (nextEl && !nextEl.classList.contains('empresa-header')) {
                        if (nextEl.classList.contains('ruta-card') && nextEl.style.display !== 'none') {
                            hasVisibleCard = true;
                            break;
                        }
                        nextEl = nextEl.nextElementSibling;
                    }
                    header.style.display = hasVisibleCard ? 'block' : 'none';
                });
            });
        })
        .catch(err => {
            console.error("Error cargando componentes:", err);
        });

    // Control interactivo del botón de Modo Oscuro
    let modoOscuroActivo = false;
    const btnToggle = document.getElementById('dark-mode-trigger');

    btnToggle.addEventListener('click', function() {
        if (!modoOscuroActivo) {
            map.removeLayer(capaClara);
            capaOscura.addTo(map);
            document.body.classList.add('dark-mode-active');
            btnToggle.innerHTML = "☀️ Modo Claro";
            modoOscuroActivo = true;
        } else {
            map.removeLayer(capaOscura);
            capaClara.addTo(map);
            document.body.classList.remove('dark-mode-active');
            btnToggle.innerHTML = "🌙 Modo Oscuro";
            modoOscuroActivo = false;
        }
    });

    // Lógica para cerrar y volver a abrir la tarjeta de referencias (A y B)
    const leyendaCard = document.getElementById('leyenda-referencias');
    const btnCerrarLeyenda = document.getElementById('cerrar-leyenda');
    const btnAbrirLeyenda = document.getElementById('abrir-leyenda');

    btnCerrarLeyenda.addEventListener('click', function(e) {
        e.stopPropagation(); 
        leyendaCard.style.display = 'none';
        btnAbrirLeyenda.style.display = 'flex';
    });

    btnAbrirLeyenda.addEventListener('click', function(e) {
        e.stopPropagation();
        btnAbrirLeyenda.style.display = 'none';
        leyendaCard.style.display = 'block';
    });

    // Lógica global para controlar el Modal flotante del Aviso Legal
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'abrir-aviso-legal') {
            e.preventDefault();
            modalLegal.style.display = 'flex';
        }
        if (e.target && e.target.id === 'cerrar-aviso-legal') {
            modalLegal.style.display = 'none';
        }
    });

    modalLegal.addEventListener('click', function(e) {
        if (e.target === modalLegal) {
            modalLegal.style.display = 'none';
        }
    });
</script>
</body>
</html>