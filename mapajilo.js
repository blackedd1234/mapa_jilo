(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.LogogramaVBase = function() {
	this.initialize(img.LogogramaVBase);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1348,1416);


(lib.zapata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape.setTransform(475.675,443.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhnCOIA+AAIAAgsIA1AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_1.setTransform(458.95,443.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_2.setTransform(299.275,443.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIAzAAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_3.setTransform(276.75,443.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag1ByQgYgGgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYATAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_4.setTransform(475.625,331.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhnCOIA+AAIAAgrIA1AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_5.setTransform(454.45,331.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgJQALgKAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_6.setTransform(299.275,330.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIAzAAIAAArIAoAAIAAAtIgoAAIAAAyg");
	this.shape_7.setTransform(276.75,330.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgQgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_8.setTransform(475.725,218.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_9.setTransform(454.725,218.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgQgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_10.setTransform(297.725,218.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_11.setTransform(276.725,218.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgTAJgOQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAOAAATQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAJAUAAQAUAAAMgJQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQAAQARAAAKgHQAKgIAAgNQAAgOgKgJQgKgHgRAAQgQAAgKAHg");
	this.shape_12.setTransform(394.925,99.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_13.setTransform(372.975,99.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_14.setTransform(355.575,99.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_15.setTransform(531.85,-37.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_16.setTransform(508.3,-37.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAglAaIBKAAIglhag");
	this.shape_17.setTransform(484.8,-37.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AhmB3IAAjtIBmAAQAgAAAXALQAXAKANATQAMAUAAAaQAAAagMATQgNATgXALQgXALggAAIgvAAIAABBgAgvAJIAtAAQAYAAANgKQANgLAAgUQAAgTgNgLQgNgLgYAAIgtAAg");
	this.shape_18.setTransform(460.025,-37.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_19.setTransform(433.9,-37.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhnB3IAAgkICBicIh+AAIAAgtIDHAAIAAAkIiBCcICGAAIAAAtg");
	this.shape_20.setTransform(409.75,-37.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_21.setTransform(374.125,-37.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_22.setTransform(346.025,-37.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_23.setTransform(319.3,-37.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_24.setTransform(300.675,-37.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_25.setTransform(286.075,-37.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_26.setTransform(268.975,-37.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_27.setTransform(247.175,-37.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_28.setTransform(220.175,-37.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_29.setTransform(376.125,270.475);
	this.shape_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Aj0D0IgQhfIgKgkIgVgwIgPgZIgTAMIgEABIgDACIgEACIgJACIg0ABIgfj1IAlgPIBnggIBQgLIBQAAIBRAKICgAmIA+CJIAeA1IAiAwIAnAsIA6AwIA4AhIAfAOIAGAfIhkAQIk9AMg");
	this.shape_30.setTransform(0.0185,0.0275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ABD25D").s().p("AkDCVIgLgkIgVgwIgPgZIgTAMIgDABIgEACIgEACIgJACIg0ABIgfj1IAlgPIBnggIBQgLIBQAAIBRAKICgAmIA+CJIAeA1IAiAwIAnAsIA6AwIA4AhIAgAOIAFAfIhkAQIk9AMIkAADg");
	this.shape_31.setTransform(0,0.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Aj0D0IgQhfIgKgkIgVgwIgPgZIgTAMIgEABIgDACIgEACIgJACIg0ABIgfj1ICMgvIBQgLIBQAAIBRAKICgAmIA+CJIAeA1IAiAwIAnAsIA6AwIA4AhIAfAOIAGAfIhkAQIk9AMg");
	this.shape_32.setTransform(0.0169,0.0275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF1000").s().p("AkDCVIgLgkIgVgwIgPgZIgTAMIgDABIgEACIgEACIgJACIg0ABIgfj1ICMgvIBQgLIBQAAIBRAKICgAmIA+CJIAeA1IAiAwIAnAsIA6AwIA4AhIAgAOIAFAfIhkAQIk9AMIkAADg");
	this.shape_33.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-65.6,603.9,532);


(lib.xhixhata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgDBtIAAiwIgrAAIAAgoIBdAAIAADYg");
	this.shape.setTransform(511.05,139.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag1BsQgQgEgLgHIASglQAQALAZAAQAbAAAQgQQAQgRABgeQgTATgiAAQgVAAgRgIQgRgIgKgPQgKgPAAgUQAAgWALgQQALgRATgJQATgIAXAAQAsAAAaAbQAaAcAAA0QAAAkgOAaQgOAbgZANQgZAOggAAQgRAAgQgEgAgehBQgKAIAAAPQAAAPAKAJQALAJAQAAQAQAAAKgJQALgJAAgPQAAgOgLgJQgKgJgQAAQgQAAgLAJg");
	this.shape_1.setTransform(495.975,139.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIAUgmQAMAJAQAFQAQAFARAAQASAAALgHQAKgIAAgNQAAgOgLgIQgLgGgagBIg4AAIALh4ICDAAIAAAoIhaAAIgDApIASAAQAtAAAWASQAVARAAAfQABAUgKAQQgLARgTAJQgVAKgdAAQgXABgWgHg");
	this.shape_2.setTransform(476.9,139.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_3.setTransform(339.625,139.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag1BsQgQgEgLgHIASglQAQALAZAAQAbAAAQgQQAQgRABgeQgTATgiAAQgVAAgRgIQgRgIgKgPQgKgPAAgUQAAgWALgQQALgRATgJQATgIAXAAQAsAAAaAbQAaAcAAA0QAAAkgOAaQgOAbgZANQgZAOggAAQgRAAgQgEgAgehBQgKAIAAAPQAAAPAKAJQALAJAQAAQAQAAAKgJQALgJAAgPQAAgOgLgJQgKgJgQAAQgQAAgLAJg");
	this.shape_4.setTransform(320.725,139.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIAUgnQAMAKAQAFQAQAFARAAQASAAALgHQAKgIAAgNQABgOgLgHQgMgIgaAAIg5AAIAMh4ICDAAIAAAoIhaAAIgCApIARAAQAtAAAVATQAXAQAAAfQgBAUgJAQQgKARgVAJQgUALgcgBQgXAAgXgGg");
	this.shape_5.setTransform(301.65,139.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQAMgRAAgjQAAgjgMgRQgLgRgUAAQgTAAgKARg");
	this.shape_6.setTransform(514.05,27.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AAQBtIAAguIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgoIAvAAIAAAoIAkAAIAAApIgkAAIAAAug");
	this.shape_7.setTransform(493.225,27.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_8.setTransform(472.625,27.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgwBoQgWgGgQgLIAUgnQANAKAQAFQAQAFARAAQASAAALgIQALgHAAgNQAAgOgMgHQgLgIgbABIg3AAIALh6ICDAAIAAApIhZAAIgEApIASAAQAtAAAWASQAVASAAAeQAAAUgKARQgKAQgTAKQgVAKgdAAQgXgBgWgGg");
	this.shape_9.setTransform(341.75,28);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AAQBsIAAgtIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgoIAvAAIAAAoIAkAAIAAApIgkAAIAAAtg");
	this.shape_10.setTransform(322.475,27.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_11.setTransform(301.875,27.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgvBoQgXgGgPgLIATgmQAMAJARAFQAQAFASAAQARAAALgHQALgIAAgNQAAgbgnABIgYAAIAAghIAsgyIhbAAIAAgpICXAAIAAAhIgyA4QAdAFAPAQQAQAQAAAYQgBATgJAQQgLAQgUAKQgUAJgcABQgYAAgVgHg");
	this.shape_12.setTransform(517.65,-83.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgCBsIAAivIgsAAIAAgpIBdAAIAADYg");
	this.shape_13.setTransform(501.8,-84);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgwBoQgWgGgQgLIAUgmQANAJAQAFQAQAFARAAQASAAALgHQALgIAAgNQAAgbgoABIgWAAIAAghIArgyIhcAAIAAgpICXAAIAAAhIgwA4QAcAFAPAQQAPAQAAAYQAAATgKAQQgJAQgVAKQgUAJgdABQgWAAgXgHg");
	this.shape_14.setTransform(487.2,-83.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgaA0IAOgwQgIgEgEgGQgFgGAAgKQAAgNAJgJQAIgHAMgBQANABAJAHQAIAJAAANQAAAHgCAFIgGASIgSAsg");
	this.shape_15.setTransform(474.575,-73.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDBsIAAivIgrAAIAAgpIBdAAIAADYg");
	this.shape_16.setTransform(463.25,-84);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIAUgnQAMAKAQAFQAQAFARAAQASAAALgHQAKgIAAgNQABgOgMgIQgLgGgagBIg5AAIAMh4ICDAAIAAAoIhaAAIgDApIASAAQAtAAAVATQAXARAAAeQgBAUgJAQQgKARgVAJQgUAKgcAAQgYABgWgHg");
	this.shape_17.setTransform(350.35,-84.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag1BsQgQgEgLgHIASglQAQALAZAAQAbAAAQgQQAQgRABgeQgTATgiAAQgVAAgRgIQgRgIgKgPQgKgPAAgUQAAgWALgQQALgRATgJQATgIAXAAQAsAAAaAbQAaAcAAA0QAAAkgOAaQgOAbgZANQgZAOggAAQgRAAgQgEgAgehBQgKAIAAAPQAAAPAKAJQALAJAQAAQAQAAAKgJQALgJAAgPQAAgOgLgJQgKgJgQAAQgQAAgLAJg");
	this.shape_18.setTransform(331.225,-84.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgwBoQgWgGgQgLIAUgnQANAKAQAFQAQAFARAAQASAAALgHQALgHAAgOQAAgagoAAIgWAAIAAggIArgzIhcAAIAAgoICXAAIAAAgIgwA4QAcAEAPARQAPAQAAAYQABATgLAQQgKAQgUAJQgUAKgdAAQgWABgXgHg");
	this.shape_19.setTransform(311.95,-84.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgaA1IAOgyQgIgCgEgHQgFgHAAgJQAAgNAJgIQAIgJAMAAQANAAAJAJQAIAIAAANQAAAGgCAHIgGARIgSAtg");
	this.shape_20.setTransform(299.325,-74.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgDBtIAAiwIgrAAIAAgoIBdAAIAADYg");
	this.shape_21.setTransform(288,-84.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgvBoQgVgIgMgPQgLgQABgUQAAgRAIgNQAJgNAPgHQgMgHgGgMQgHgLAAgPQAAgSAKgOQALgOATgIQATgHAYAAQAZAAATAHQASAIALAOQALAOgBASQABAPgHALQgGAMgNAHQAQAHAJANQAJANgBARQAAAUgMAQQgLAPgVAIQgUAIgbAAQgbAAgUgIgAgdAVQgKAJAAAOQAAAOAKAJQALAIASAAQATAAAKgIQAMgJAAgOQAAgOgMgJQgKgIgTAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAKgHQAJgHAAgMQAAgNgJgHQgKgIgPAAQgPAAgJAIg");
	this.shape_22.setTransform(447,-205.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQAMgRAAgjQAAgjgMgRQgLgRgUAAQgTAAgKARg");
	this.shape_23.setTransform(426.2,-205.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgvBsIBNivIhHAAIAAAjIgtAAIAAhLICtAAIAAAgIhRC3g");
	this.shape_24.setTransform(406,-205.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgaA1IAOgyQgIgCgEgHQgFgGAAgKQAAgNAJgJQAIgIAMAAQANAAAJAIQAIAJAAANQAAAGgCAHIgGARIgSAtg");
	this.shape_25.setTransform(392.475,-194.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_26.setTransform(378.875,-205.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABFBtIgUgvIhjAAIgTAvIg0AAIBhjYIAwAAIBhDYgAgiAYIBEAAIgihSg");
	this.shape_27.setTransform(482.05,-346.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgYBtIAAiwIhGAAIAAgoIC9AAIAAAoIhGAAIAACwg");
	this.shape_28.setTransform(460.575,-346.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("ABFBtIgUgvIhjAAIgUAvIgzAAIBhjYIAxAAIBgDYgAgiAYIBEAAIgihSg");
	this.shape_29.setTransform(439.15,-346.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AAxBtIAAhZIhhAAIAABZIgzAAIAAjYIAzAAIAABVIBhAAIAAhVIAzAAIAADYg");
	this.shape_30.setTransform(414.725,-346.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AA0BtIg0hMIgzBMIg6AAIBRhuIhNhqIA5AAIAxBGIAxhGIA2AAIhLBoIBRBwg");
	this.shape_31.setTransform(391.175,-346.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgYBtIAAjYIAxAAIAADYg");
	this.shape_32.setTransform(375.075,-346.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AAxBtIAAhZIhhAAIAABZIgzAAIAAjYIAzAAIAABVIBhAAIAAhVIAzAAIAADYg");
	this.shape_33.setTransform(357.475,-346.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AA0BtIg0hMIgzBMIg6AAIBRhuIhNhqIA5AAIAxBGIAxhGIA2AAIhLBoIBRBwg");
	this.shape_34.setTransform(333.925,-346.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_35.setTransform(412.025,-33.175);
	this.shape_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AhACPIgIgsIgDgMIgIgRIgggxIAPgRIA4hMIAug5IAOgMIAMAMIA4BNIATAmIAMAkIACAXIgBAVIgCAKIgJASIgGAIIgQAPIgKAGIgZAKIgfAHIgkAEg");
	this.shape_36.setTransform(-0.0412,-0.0935);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ABD25D").s().p("AhACOIgIgrIgEgMIgIgSIgggxIAQgRIA3hLIAvg6IAOgMIALAMIA5BNIATAmIALAkIADAXIgBAVIgDAKIgIASIgGAIIgRAQIgKAGIgYAKIgfAGIglAEg");
	this.shape_37.setTransform(0.025,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF1000").s().p("AhACOIgIgrIgEgMIgIgSIgggxIAQgRIA3hLIAvg6IAOgMIALAMIA5BNIATAmIALAkIADAXIgBAVIgDAKIgIASIgGAIIgRAQIgKAGIgYAKIgfAGIglAEg");
	this.shape_38.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).to({state:[{t:this.shape_38},{t:this.shape_36}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-372.4,605.8000000000001,533.2);


(lib.xhitey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dataos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgSAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape.setTransform(509.675,187.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIAzAAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_1.setTransform(487.8,187.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_2.setTransform(464.975,187.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_3.setTransform(336.475,187.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBviWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_4.setTransform(319.75,187.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_5.setTransform(296.925,187.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_6.setTransform(509.525,75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAJQAMAKAUAAQAUAAAMgKQAMgJAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahJQgKAHAAAOQAAAOAKAIQAKAHAQAAQARAAAKgHQAKgIAAgOQAAgOgKgHQgKgIgRAAQgQAAgKAIg");
	this.shape_7.setTransform(487.125,75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_8.setTransform(465.175,75.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgKQAFgLAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAVIg2A0IBlAAIAAAtg");
	this.shape_9.setTransform(336.675,75.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgQgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_10.setTransform(315.975,76);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_11.setTransform(294.725,76.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIA0AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_12.setTransform(509.6,-39.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgKQAFgLAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAWIg2A0IBlAAIAAAtg");
	this.shape_13.setTransform(487.025,-39.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_14.setTransform(466.775,-39.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahJQgKAHAAAOQAAAOAKAIQAKAHAQAAQARAAAKgHQAKgIAAgOQAAgOgKgHQgKgIgRAAQgQAAgKAIg");
	this.shape_15.setTransform(337.475,-37.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahJQgKAHAAAOQAAAOAKAIQAKAHAQAAQARAAAKgHQAKgIAAgOQAAgOgKgHQgKgIgRAAQgQAAgKAIg");
	this.shape_16.setTransform(315.025,-37.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAkIhYDJg");
	this.shape_17.setTransform(293.125,-37.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAVIg2A0IBlAAIAAAtg");
	this.shape_18.setTransform(435.775,-159.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_19.setTransform(418.225,-159);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_20.setTransform(402.475,-158.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_21.setTransform(388.225,-147.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_22.setTransform(375.775,-159);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgaB3IAAhVIhdiYIA7AAIA+BqIBAhqIA2AAIhdCYIAABVg");
	this.shape_23.setTransform(482.8,-294.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_24.setTransform(460.525,-294.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_25.setTransform(438,-294.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_26.setTransform(421.925,-294.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AA2B3IAAhhIhrAAIAABhIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_27.setTransform(402.625,-294.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AA5B3Ig5hTIg4BTIg/AAIBYh4IhUh1IA/AAIA1BNIA2hNIA8AAIhTBzIBYB6g");
	this.shape_28.setTransform(376.725,-294.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_29.setTransform(345.975,-294.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_30.setTransform(323.675,-294.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_31.setTransform(402.025,14.525);
	this.shape_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AhpEUIgCgJIgHgYIgLgWIgIgNIgPgRIgXgTIgogXIhOgaIgJgHIgJgIIgFgGIgEgHIgEgJIgKgjIBFgQIBJghIAlgZIAigeIA8hFIBoiZIAmACIBNANIAYAJIAWAKIASANIAXAXIANATIAMAVIAUAyIAmCHIjPC1Ig8AmIgnASIgaAJIgtAKg");
	this.shape_32.setTransform(-0.0069,-0.007);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ABD25D").s().p("AhqEUIgBgJIgIgZIgKgVIgIgNIgPgRIgXgTIgpgXIhOgbIgJgGIgJgJIgFgFIgEgHIgDgJIgLgkIBGgQIBIggIAmgZIAhgeIA9hFIBniZIAmACIBNANIAZAIIAVALIATAMIAXAYIANATIALAUIAVAzIAmCHIjPC1Ig8AmIgnASIgbAJIgtAKg");
	this.shape_33.setTransform(0.025,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AhpEUIgCgJIgHgYIgTgjIgPgRIgXgTIgogXIhOgaIgJgHIgJgIIgFgGIgEgHIgEgJIgKgjIBFgQIBJghIAlgZIAigeIA8hFIBoiZIAmACIBNANIAYAJIAWAKIASANIAXAXIAZAoIAUAyIAmCHIjPC1Ig8AmIgnASIhHATg");
	this.shape_34.setTransform(-0.0069,-0.007);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF1000").s().p("AhqEUIgBgJIgIgZIgSgiIgPgRIgXgTIgpgXIhOgbIgJgGIgJgJIgFgFIgEgHIgDgJIgLgkIBGgQIBIggIAmgZIAhgeIA9hFIBniZIAmACIBNANIAZAIIAVALIATAMIAXAYIAYAnIAVAzIAmCHIjPC1Ig8AmIgnASIhIATg");
	this.shape_35.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-322.6,620.1,532.8);


(lib.xhimojay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape.setTransform(641.075,76.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_1.setTransform(620.875,76.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJAQQgIARgXAVIg2A0IBlAAIAAAtg");
	this.shape_2.setTransform(600.575,75.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA6AAIhmCOIA+AAIAAgsIA1AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_3.setTransform(470.1,76.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_4.setTransform(447.525,76.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_5.setTransform(425.875,76.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_6.setTransform(641.375,-35.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgJQALgKAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_7.setTransform(621.075,-35.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAVIg2A0IBlAAIAAAtg");
	this.shape_8.setTransform(599.425,-35.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_9.setTransform(469.975,-34.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_10.setTransform(448.075,-34.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_11.setTransform(427.175,-34.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape_12.setTransform(644.15,-147.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape_13.setTransform(620.7,-147.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_14.setTransform(598.225,-147.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_15.setTransform(469.775,-147.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgHg");
	this.shape_16.setTransform(448.975,-147.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgHg");
	this.shape_17.setTransform(428.775,-147.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_18.setTransform(569.225,-268.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgcAAgmQAAglANgcQANgcAXgOQAXgPAdAAQAdAAAXAPQAYAOAMAcQAOAcAAAlQAAAmgOAcQgMAcgYAOQgXAPgdAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANASQANAUAUgBQAVABANgUQAMgSAAgnQAAgmgMgTQgMgSgWgBQgUABgNASg");
	this.shape_19.setTransform(552.3,-268.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_20.setTransform(532.775,-268.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_21.setTransform(522.975,-257.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_22.setTransform(510.525,-268.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgaB3IAAhVIhdiYIA7AAIA/BqIA/hqIA2AAIhcCYIAABVg");
	this.shape_23.setTransform(620.75,-404.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("ABMB3IgVgzIhuAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_24.setTransform(596.25,-404.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgwBwQgTgJgOgRIAfgkQAUAaAZAAQAgAAAAgoIAAhvIhTAAIAAgtICKAAIAACZQgBAsgVAWQgWAWgpAAQgYAAgVgJg");
	this.shape_25.setTransform(572.4,-404.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKASQAKARARAKQARAJAUAAQAVAAARgJQARgKAJgRQAKgSAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_26.setTransform(550.475,-404.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_27.setTransform(519.875,-404.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_28.setTransform(498.075,-404.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AA2B3IAAhhIhrAAIAABhIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_29.setTransform(478.775,-404.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AA5B3Ig5hTIg4BTIg/AAIBYh4IhUh1IA/AAIA1BNIA2hNIA8AAIhTBzIBYB6g");
	this.shape_30.setTransform(452.875,-404.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_31.setTransform(538.825,-93.875);
	this.shape_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Aj/jmIAEgHIAVglIAJgaIAHgfIAJhyIA9g0IAtAZIDyClIA9AdIBAAUIBFAHIAdC4IhmDwIgkB8IgFAYIg0AOIg4AYIieBoIhBAkIjOgzIgygFIACgsIAKhAIAlh6IAlhkIAjh6IAJhVIAAgWIgFgsg");
	this.shape_32.setTransform(-0.0025,-0.0115);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ABD25D").s().p("Ak6HAIgygGIACgrIAJhAIAlh7IAlhkIAjh5IAJhVIAAgWIgEgtIgQhGIAEgGIAVgmIAJgZIAHgfIAIhzIA+gzIAsAZIDyClIA+AdIBAAUIBFAHIAdC4IhmDwIgkB8IgFAXIg0APIg4AXIieBoIhCAkg");
	this.shape_33.setTransform(0,0.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Aj/jmIAEgHIAVglIAJgaIAHgfIAJhyIA9g0IAtAZIDyClIA9AdIBAAUIBFAHIAdC4IhmDwIgpCUIg0AOIg4AYIieBoIhBAkIjOgzIgygFIACgsIAKhAIAlh6IAlhkIAjh6IAJhVIAAgWIgFgsg");
	this.shape_34.setTransform(-0.0025,-0.0115);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF1000").s().p("Ak6HAIgygGIACgrIAJhAIAlh7IAlhkIAjh5IAJhVIAAgWIgEgtIgQhGIAEgGIAVgmIAJgZIAHgfIAIhzIA+gzIAsAZIDyClIA+AdIBAAUIBFAHIAdC4IhmDwIgpCTIg0APIg4AXIieBoIhCAkg");
	this.shape_35.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-432.6,757.5,532);


(lib.teupan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape.setTransform(727.825,110.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAYAOQAXAPAMAcQAOAbAAAmQAAAngOAbQgMAcgXAOQgYAPgdAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQANASAUABQAVgBANgSQAMgTAAgnQAAgmgMgTQgNgSgVAAQgUAAgNASg");
	this.shape_1.setTransform(705.75,110.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_2.setTransform(683.725,110.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_3.setTransform(555.625,111.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgOAFgJQAFgKAAgKQAAgOgKgIQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_4.setTransform(533.975,111.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgOAFgJQAFgKAAgKQAAgOgKgIQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_5.setTransform(513.925,111.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg2IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_6.setTransform(728.375,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIA0AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_7.setTransform(707.6,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgPgKgIQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_8.setTransform(685.025,-1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_9.setTransform(553.625,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_10.setTransform(537.875,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAVIg2A0IBlAAIAAAtg");
	this.shape_11.setTransform(517.575,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAgmANgbQANgcAXgOQAXgPAdAAQAeAAAXAPQAWAOAOAcQANAbAAAmQAAAmgNAcQgOAcgWAPQgXAOgeAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMASQAMATAVAAQAVAAANgTQANgSAAgnQAAgmgNgTQgNgTgVAAQgVAAgMATg");
	this.shape_12.setTransform(729.2,-113.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_13.setTransform(706.925,-113.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhnCOIBAAAIAAgsIAzAAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_14.setTransform(686.15,-113.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_15.setTransform(558.325,-113.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_16.setTransform(537.825,-113.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA6AAIhoCOIBAAAIAAgrIAzAAIAAArIAoAAIAAAtIgoAAIAAAyg");
	this.shape_17.setTransform(516.05,-113.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_18.setTransform(647.475,-234.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAXAPQAYAOANAcQANAbAAAmQAAAngNAbQgNAcgYAPQgXAOgdAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMASQANAUAUgBQAWABAMgUQAMgSAAgnQAAgmgMgTQgMgSgWgBQgUABgNASg");
	this.shape_19.setTransform(626.1,-235.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_20.setTransform(603.425,-235.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_21.setTransform(683.225,-369.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_22.setTransform(656.5,-369.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhmB3IAAjtIBmAAQAgAAAXAKQAXALANATQAMAUAAAaQAAAbgMASQgNAUgXAKQgXAKggAAIgvAAIAABCgAgvAIIAtAAQAYAAANgJQANgLAAgUQAAgTgNgMQgNgKgYAAIgtAAg");
	this.shape_23.setTransform(631.725,-369.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgPQAOgPAAgiIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_24.setTransform(605.175,-369.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_25.setTransform(581.025,-369.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_26.setTransform(558.5,-369.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("A2edhIAAleIROAAIAAFegAFTdYIAAleIROAAIAAFegA2fMSIAAleIRPAAIAAFegAFbMJIAAleIRPAAIAAFegAEflfIAAleIRPAAIAAFegA2plrIAAleIRPAAIAAFegAoJ4CIAAleIRNAAIAAFeg");
	this.shape_27.setTransform(628.075,-58.275);
	this.shape_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AqICnIAAijIAIgEIAIgFIBphUIA6giICWgkIDzhbIAOBBIBAAFIAugDIApgHICXgnICUAoIAyAUIAxAaIAtAfIAaAXIAYgKIANgEIAJgBIAJABIAjAGIgIByIgHAfIgJAZIgGAMIgUAgIkBAYIgOAFIgEACIgMAJIhwAhIjJAuIhpANIhOADIhlgHIhHgQIgtgRIg+giIhJAJIgzgDIgKgCg");
	this.shape_28.setTransform(0.0159,-0.0844);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ABD25D").s().p("AkeD0IhHgQIgsgRIg+giIhKAJIgygDIgLgBIgygQIAAijIAIgDIAJgFIBphUIA5gjICWgjIDzhbIAOBAIBBAFIAtgDIApgHICXgnICUAoIAzAVIAwAaIAtAfIAaAWIAZgKIAMgEIAJAAIAJAAIAjAHIgIBxIgHAfIgJAaIgGALIgTAhIkCAXIgNAFIgFACIgMAJIhwAiIjJAuIhpAMIhOAEg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AqICnIAAijIAIgEIAIgFIBphUIA6giICWgkIDzhbIAOBBIBAAFIBXgKICXgnICUAoIAyAUIAxAaIAtAfIAaAXIAYgKIANgEIASAAIAjAGIgIByIgHAfIgJAZIgaAsIkBAYIgOAFIgEACIgMAJIhwAhIjJAuIhpANIhOADIhlgHIhHgQIgtgRIg+giIhJAJIgzgDIgKgCg");
	this.shape_30.setTransform(0.0159,-0.0844);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF1000").s().p("AkeD0IhHgQIgsgRIg+giIhKAJIgygDIgLgBIgygQIAAijIAIgDIAJgFIBphUIA5gjICWgjIDzhbIAOBAIBBAFIBWgKICXgnICUAoIAzAVIAwAaIAtAfIAaAWIAZgKIAMgEIASAAIAjAHIgIBxIgHAfIgJAaIgZAsIkCAXIgNAFIgFACIgMAJIhwAiIjJAuIhpAMIhOAEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.4,-397.6,878.4,532.1);


(lib.tecolapan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhnCOIBAAAIAAgsIAzAAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape.setTransform(585.35,365.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_1.setTransform(565.275,365.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_2.setTransform(549.425,365);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_3.setTransform(407.275,366.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_4.setTransform(388.125,366.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgJAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape_5.setTransform(372.275,366);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_6.setTransform(587.825,254.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_7.setTransform(567.775,254.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_8.setTransform(547.725,254.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_9.setTransform(412.325,254.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_10.setTransform(389.8,254.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgJAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgMQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape_11.setTransform(367.225,253.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA1AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_12.setTransform(589.45,141.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_13.setTransform(566.975,141.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA1AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_14.setTransform(545.8,141.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_15.setTransform(410.375,141.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_16.setTransform(390.225,141.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIAzAAIAAArIAoAAIAAAtIgoAAIAAAyg");
	this.shape_17.setTransform(369.45,141.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_18.setTransform(504.575,23.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgQAVgIQAVgIAaAAQAbAAAVAIQAVAIALAQQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAARQAAAPAMAJQAMAJAUAAQAUAAAMgJQAMgJAAgPQAAgRgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQAAQARAAAKgIQAKgIAAgOQAAgOgKgHQgKgJgRAAQgQAAgKAJg");
	this.shape_19.setTransform(482.925,23.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgQAVgIQAVgIAaAAQAbAAAVAIQAVAIALAQQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAARQAAAPAMAJQAMAJAUAAQAUAAAMgJQAMgJAAgPQAAgRgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQAAQARAAAKgIQAKgIAAgOQAAgOgKgHQgKgJgRAAQgQAAgKAJg");
	this.shape_20.setTransform(460.475,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_21.setTransform(579.925,-115.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAglAaIBKAAIglhag");
	this.shape_22.setTransform(553.2,-115.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhmB3IAAjtIBmAAQAgAAAXAKQAXALANAUQAMATAAAbQAAAagMASQgNAUgXAKQgXAKggAAIgvAAIAABCgAgvAIIAtAAQAYAAANgJQANgLAAgTQAAgVgNgLQgNgKgYAAIgtAAg");
	this.shape_23.setTransform(528.425,-115.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("ABMB3IgVgzIhuAAIgVAzIg4AAIBqjtIA1AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_24.setTransform(502.3,-115.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_25.setTransform(480.225,-115.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_26.setTransform(454.375,-115.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgxBrQgegPgRgdQgQgcAAgjQAAgjAQgcQARgbAegRQAdgPAjAAQAfAAAZALQAaAKAQAVIgjAhQgYgcgkAAQgVAAgRAKQgSAJgKASQgJARAAAVQAAAWAJASQAKAQASALQARAJAVAAQAkAAAYgcIAjAgQgQAVgaALQgZALgfAAQgjAAgdgQg");
	this.shape_27.setTransform(427.85,-115.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_28.setTransform(404.375,-115.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_29.setTransform(381.85,-115.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_30.setTransform(481.025,195.875);
	this.shape_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AmjGeIAflwIAEgMIAbg4IB8iqIAWgmIARgoIEHiIIBlgqICxg5IBIBlIgRAMIgaAOIiAAuIgRAJIgVAPIgHAGIgFAHIgQAYIgDAJIgGAWIijAvIgaAMIgfAWIgWAUIgbAkIggA9IhKHnIgIAkIgFAMIgDAFIgDAEIgEADIhbhCIgbgNIgGgCIgGgCIgGgBIgGgCIgVgEg");
	this.shape_31.setTransform(0.076,0.0507);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ABD25D").s().p("Ak7G3IgbgNIgGgBIgGgDIgGgBIgHgCIgUgDIgggCIAglwIADgMIAbg3IB9irIAVglIARgoIEIiJIBlgpICwg6IBIBmIgQAMIgaAOIiBAuIgQAIIgWAQIgGAGIgFAHIgQAYIgDAJIgHAVIiiAvIgaANIgfAVIgWAVIgbAjIggA+IhKHnIgJAkIgEALIgDAFIgEAEIgDAEg");
	this.shape_32.setTransform(0,0.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AmjGeIAflwIAEgMIAbg4IB8iqIAWgmIARgoIEHiIIBlgqICxg5IBIBlIgRAMIgaAOIiAAuIgRAJIgVAPIgHAGIgFAHIgQAYIgDAJIgGAWIijAvIgaAMIgfAWIgWAUIgbAkIggA9IhKHnIgIAkIgFAMIgGAJIgEADIhbhCIgbgNIgGgCIgGgCIgGgBIgGgCIgVgEg");
	this.shape_33.setTransform(0.076,0.0507);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF1000").s().p("Ak7G3IgbgNIgGgBIgGgDIgGgBIgHgCIgUgDIgggCIAglwIADgMIAbg3IB9irIAVglIARgoIEIiJIBlgpICwg6IBIBmIgQAMIgaAOIiBAuIgQAIIgWAQIgGAGIgFAHIgQAYIgDAJIgHAVIiiAvIgaANIgfAVIgWAVIgbAjIggA+IhKHnIgJAkIgEALIgHAJIgDAEg");
	this.shape_34.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-143.6,709.9,532.9);


(lib.stamartha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape.setTransform(521.125,166.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag1ByQgYgGgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYATAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_1.setTransform(499.575,166.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAglANgcQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAcAAAlQAAAmgOAcQgNAcgXAPQgWAOgeAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANATQANASAUAAQAWAAAMgSQANgTAAgnQAAgmgNgTQgMgTgWABQgUgBgNATg");
	this.shape_2.setTransform(351.8,166.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA1AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_3.setTransform(328.9,166.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAVIg2A0IBlAAIAAAtg");
	this.shape_4.setTransform(520.175,54.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgJQALgKAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_5.setTransform(500.125,54.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgIAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWALQgWAKggAAQgZAAgZgHg");
	this.shape_6.setTransform(349.225,55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAjIhYDKg");
	this.shape_7.setTransform(328.725,54.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgJQALgKAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_8.setTransform(527.825,-58.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_9.setTransform(506.275,-58);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_10.setTransform(488.475,-58.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_11.setTransform(355.925,-57.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_12.setTransform(335.875,-57.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_13.setTransform(316.725,-57.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAIAUABQAUgBAMgIQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQAAQARAAAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_14.setTransform(447.125,-177.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_15.setTransform(427.925,-177.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_16.setTransform(411.825,-177.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhnB3IAAgkICCicIiAAAIAAgtIDIAAIAAAkIiCCcICHAAIAAAtg");
	this.shape_17.setTransform(494.3,-284);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgPQAOgPAAgiIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_18.setTransform(469.175,-283.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AAvB3IguhCIgCAAIgwAAIAABCIg3AAIAAjtIBnAAQAfAAAWALQAYAKAMATQANAUAAAaQAAAbgNASQgNATgXALIA1BMgAgxAJIAtAAQAYAAAMgKQAOgLAAgUQAAgTgOgLQgMgLgYAAIgtAAg");
	this.shape_19.setTransform(444.15,-284);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgxBrQgegQgRgcQgQgbAAgkQAAgiAQgcQARgdAegQQAdgPAkAAQAeAAAZAKQAaAMARAUIgkAhQgYgcgkAAQgVAAgRAKQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAVAAQAkAAAYgcIAkAhQgSAUgZALQgZALgfAAQgjAAgdgQg");
	this.shape_20.setTransform(418.65,-284);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_21.setTransform(383.35,-284);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_22.setTransform(361.275,-284);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_23.setTransform(591.975,-315.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAPAQAbQARAaAAAjQAAAkgRAaQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjgBIgyAAg");
	this.shape_24.setTransform(566.625,-315.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_25.setTransform(529.25,-315.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AA2B3IAAhhIhrAAIAABhIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_26.setTransform(502.475,-315.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_27.setTransform(478.25,-315.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AAuB3IguhCIgBAAIgwAAIAABCIg3AAIAAjtIBnAAQAeAAAXAKQAYALAMAUQANATAAAbQAAAagNASQgNATgXAKIA1BNgAgxAJIAtAAQAYAAANgKQAMgLAAgTQAAgVgMgLQgNgKgYAAIgtAAg");
	this.shape_28.setTransform(456.1,-315.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("ABMB3IgVgzIhuAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_29.setTransform(429.75,-315.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_30.setTransform(400.475,-315.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_31.setTransform(361.65,-315.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_32.setTransform(338.1,-315.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_33.setTransform(313.875,-315.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_34.setTransform(287.15,-315.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("Ag3BzQgbgHgQgNIASgpQAQALAVAHQAVAHAVAAQAWAAAMgHQALgHAAgMQAAgIgHgFQgGgHgLgDIgbgIQgbgFgRgHQgSgGgMgOQgMgOAAgYQAAgVALgQQALgRAXgKQAXgKAfAAQAXAAAWAFQAVAGARAKIgSAqQgggTghAAQgWAAgLAIQgLAHAAANQAAALAMAHQANAFAZAGQAcAHAQAGQASAGANAOQAMANAAAYQAAAUgLARQgMARgXAKQgWAKggAAQgcAAgagIg");
	this.shape_35.setTransform(263.3,-315.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_36.setTransform(431.225,-5.175);
	this.shape_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Ah/BIIAGglIAHgWIAHgNIA0hRIBNAbIAVAKIAZARIARAPIAPAQIATAiIAHAZIACAJIjLAKIgZgDg");
	this.shape_37.setTransform(0.0065,-0.0488);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ABD25D").s().p("AhkBOIgbgGIAGglIAIgWIAHgNIAzhRIBNAbIAVAKIAZARIARAOIAQAQIASAjIAIAZIABAJIjLAKg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Ah/BIIAGglIAHgWIAHgNIA0hRIBNAbIAVAKIAZARIAgAfIATAiIAHAZIACAJIjLAKg");
	this.shape_39.setTransform(0.0042,-0.0484);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF1000").s().p("Ah/BIIAGglIAIgWIAHgNIAzhRIBNAbIAVAKIAZARIAhAeIASAjIAIAZIABAJIjLAKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-343.7,627.8,533.8);


(lib.snmiguel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg2IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape.setTransform(583.175,311.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_1.setTransform(563.275,311);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_2.setTransform(543.025,311.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_3.setTransform(404.7,312.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAjIhYDKg");
	this.shape_4.setTransform(381.925,312.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAjIhYDKg");
	this.shape_5.setTransform(360.825,312.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_6.setTransform(586.525,199.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_7.setTransform(564,199.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgIQAVgJAaAAQAbAAAVAJQAVAIALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAARQAAAPAMAJQAMAJAUAAQAUAAAMgJQAMgJAAgPQAAgRgMgIQgMgKgUAAQgUAAgMAKgAgahKQgKAJAAANQAAAOAKAIQAKAIAQAAQARAAAKgIQAKgIAAgOQAAgNgKgJQgKgIgRAAQgQAAgKAIg");
	this.shape_8.setTransform(540.675,199.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_9.setTransform(406.375,199.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgIQAVgJAaAAQAbAAAVAJQAVAIALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAARQAAAPAMAJQAMAJAUAAQAUAAAMgJQAMgJAAgPQAAgRgMgIQgMgKgUAAQgUAAgMAKgAgahKQgKAJAAANQAAAOAKAIQAKAIAQAAQARAAAKgIQAKgIAAgOQAAgNgKgJQgKgIgRAAQgQAAgKAIg");
	this.shape_10.setTransform(384.625,199.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgIQAVgJAaAAQAbAAAVAJQAVAIALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAARQAAAPAMAJQAMAJAUAAQAUAAAMgJQAMgJAAgPQAAgRgMgIQgMgKgUAAQgUAAgMAKgAgahKQgKAJAAANQAAAOAKAIQAKAIAQAAQARAAAKgIQAKgIAAgOQAAgNgKgJQgKgIgRAAQgQAAgKAIg");
	this.shape_11.setTransform(362.175,199.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_12.setTransform(595.075,86.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_13.setTransform(574.975,86.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_14.setTransform(554.075,86.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAHIgHATIgUAxg");
	this.shape_15.setTransform(538.475,97.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_16.setTransform(526.025,86.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAYAPQAXAOANAcQANAbAAAmQAAAngNAbQgNAcgXAPQgYAOgdAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMASQAMAUAVgBQAWABAMgUQAMgSAAgnQAAgmgMgTQgMgSgWgBQgVABgMASg");
	this.shape_17.setTransform(414.95,87.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_18.setTransform(392.925,86.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAkIhYDJg");
	this.shape_19.setTransform(372.675,87.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_20.setTransform(357.825,98.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_21.setTransform(345.375,87.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_22.setTransform(511.025,-31.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgKQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_23.setTransform(490.475,-31.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_24.setTransform(469.225,-31.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_25.setTransform(455.375,-20.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_26.setTransform(440.175,-31.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBrDtgAgmAaIBLAAIglhag");
	this.shape_27.setTransform(550.1,-137.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_28.setTransform(531.475,-137.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AAvB3IgvhCIgBAAIgwAAIAABCIg3AAIAAjtIBnAAQAfAAAWALQAYAKAMATQANAUAAAaQAAAbgNASQgNAUgXAJIA1BNgAgxAJIAtAAQAYAAANgKQAMgLAAgUQAAgUgMgKQgNgLgYAAIgtAAg");
	this.shape_29.setTransform(514.25,-137.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_30.setTransform(486.575,-137.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDNAAIAAAtIhLAAIAADAg");
	this.shape_31.setTransform(461.7,-137.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgyBrQgdgPgRgcQgRgcAAgkQAAgiARgcQARgcAdgQQAegQAkAAQAeAAAaAKQAZAMAQAUIgjAgQgYgbgjAAQgWAAgRAJQgRAKgLARQgJASAAAVQAAAWAJARQALARARAKQARAKAWAAQAjAAAYgcIAjAhQgRAUgZALQgZALgfAAQgjAAgegQg");
	this.shape_32.setTransform(439.05,-137.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_33.setTransform(420.775,-137.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AgbB3IhmjtIA7AAIBICpIBKipIA2AAIhnDtg");
	this.shape_34.setTransform(402.55,-137.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAglAaIBKAAIglhag");
	this.shape_35.setTransform(634.2,-169.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_36.setTransform(612.125,-169.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_37.setTransform(580.225,-169.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAOAQAbQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_38.setTransform(554.875,-169.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_39.setTransform(521.475,-169.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_40.setTransform(499.175,-169.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgQQAOgPAAggIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_41.setTransform(473.725,-169.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AgzBrQgegPgRgdQgQgcAAgjQAAgjAQgcQARgbAegRQAegPAlAAQAfAAAZALQAaAKARAUIgjAhQgZgbglAAQgVAAgSAKQgSAJgJASQgKAQAAAWQAAAWAKASQAJAQASALQARAJAWAAQAXAAAUgKIAAhEIAyAAIAABfQgTAOgaAIQgZAIgaAAQglAAgdgQg");
	this.shape_42.setTransform(447,-169.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_43.setTransform(428.575,-169.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_44.setTransform(406.775,-169.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_45.setTransform(367.225,-169.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_46.setTransform(340.5,-169.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("Ag3BzQgbgHgQgMIATgqQAPALAVAHQAVAHAVAAQAXAAALgHQALgHAAgMQAAgIgHgFQgGgHgLgDIgbgHQgbgHgRgGQgSgHgMgNQgMgOAAgYQAAgVALgQQALgSAXgJQAXgKAfAAQAXAAAVAFQAWAGARAKIgRAqQghgTgiAAQgWAAgKAHQgMAIAAANQAAALAOAHQAMAGAZAFQAcAGAQAHQASAGAMAOQANAOAAAYQAAATgLASQgMARgWAJQgXAKggAAQgdAAgZgIg");
	this.shape_47.setTransform(316.65,-169.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_48.setTransform(474.025,139.525);
	this.shape_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AisLVIAAgpIgWgDIgkgKIgIgCIgvgEIANibIgNomIAEgEIADgEIAEgIIAEgIIAIgkIBKnoIAgg+IAigrIAWgTIAYgPIAlgQICYgsIAVAWIAMARIAxB0IjEgNIgSBbIgDA4IADAlIAHAlIAQArIAOAaICwgPIAFBqIhCAdIAEApIAKAxIAAAMIAAAJIgCAEIgCAJIgFAJIgGAKIgTAWIADA5IAKA1IAYBKIByDyIATBBIAEAsIgDAuIgMAxIglBOIgoA4IgUBdIhBgKIjkgxg");
	this.shape_49.setTransform(-0.0193,0.0028);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#ABD25D").s().p("ABuMJIjkgxIg2gCIAAgqIgWgDIgkgKIgIgBIgvgFIAMibIgMomIADgEIAEgEIAEgIIADgIIAJgkIBKnoIAgg+IAigrIAWgTIAYgPIAkgQICYgrIAVAVIANARIAxB0IjFgNIgSBcIgCA3IADAlIAHAlIAQAsIAOAZICvgPIAGBqIhCAdIAEApIAKAxIAAANIAAAJIgCADIgDAKIgEAIIgHAKIgTAXIAEA5IAKA0IAYBKIByDyIATBBIADAsIgCAuIgMAyIglBNIgoA5IgVBdg");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AisLVIAAgpIgWgDIgkgKIgIgCIgvgEIANibIgNomIAEgEIADgEIAIgQIAIgkIBKnoIAgg+IAigrIAWgTIAYgPIAlgQICYgsIAVAWIAMARIAxB0IjEgNIgSBbIgDA4IAKBKIAQArIAOAaICwgPIAFBqIhCAdIAEApIAKAxIAAAVIgEANIgLATIgTAWIADA5IAKA1IAYBKIByDyIATBBIAEAsIgDAuIgMAxIglBOIgoA4IgUBdIhBgKIjkgxg");
	this.shape_51.setTransform(-0.0193,0.0028);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF1000").s().p("ABuMJIjkgxIg2gCIAAgqIgWgDIgkgKIgIgBIgvgFIAMibIgMomIADgEIAEgEIAHgQIAJgkIBKnoIAgg+IAigrIAWgTIAYgPIAkgQICYgrIAVAVIANARIAxB0IjFgNIgSBcIgCA3IAKBKIAQAsIAOAZICvgPIAGBqIhCAdIAEApIAKAxIAAAWIgFANIgLASIgTAXIAEA5IAKA0IAYBKIByDyIATBBIADAsIgCAuIgMAyIglBNIgoA5IgVBdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.6,-197.6,690.6,532.9);


(lib.snmartin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape.setTransform(656.725,331.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgHg");
	this.shape_1.setTransform(640.625,331.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_2.setTransform(619.85,331.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_3.setTransform(474.875,332.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_4.setTransform(456.475,332.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag1BzQgYgHgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_5.setTransform(440.725,332.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAXAPQAYAOAMAcQAOAbAAAmQAAAmgOAcQgMAcgYAPQgXAOgdAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANASQANATAUAAQAVAAANgTQAMgSAAgnQAAgmgMgTQgMgTgWAAQgUAAgNATg");
	this.shape_6.setTransform(658.05,220.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_7.setTransform(635.15,220.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag1BzQgYgHgRgNIAWgpQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_8.setTransform(612.675,220.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_9.setTransform(478.425,219.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgHg");
	this.shape_10.setTransform(456.825,219.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgHg");
	this.shape_11.setTransform(436.625,219.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_12.setTransform(671.025,107.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape_13.setTransform(648.5,107.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgcAAgmQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAXAOQAYAPAMAcQAOAbAAAmQAAAmgOAcQgMAcgYAOQgXAPgdAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANASQANAUAUAAQAWAAAMgUQAMgSAAgnQAAgmgMgTQgMgSgWAAQgUAAgNASg");
	this.shape_14.setTransform(624.85,107.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_15.setTransform(608.875,118.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_16.setTransform(596.425,107.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape_17.setTransform(486.5,108.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg2IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_18.setTransform(463.675,108.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_19.setTransform(446.275,108.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAGIgHAUIgUAxg");
	this.shape_20.setTransform(436.475,119.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_21.setTransform(424.025,108.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAglANgcQANgcAXgPQAXgOAdAAQAdAAAYAOQAWAPAOAcQANAcAAAlQAAAngNAbQgOAcgWAOQgYAPgdAAQgdAAgXgPgAghg5QgMATAAAmQAAAnAMATQAMASAVABQAVgBANgSQAMgTAAgnQAAgmgMgTQgNgSgVAAQgVAAgMASg");
	this.shape_22.setTransform(583.6,-10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAIAQAAQARAAAKgIQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_23.setTransform(560.825,-10.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_24.setTransform(541.625,-10.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_25.setTransform(531.825,0.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgNAFgLQAFgJAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape_26.setTransform(516.875,-11.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_27.setTransform(709.525,-117.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgxBrQgegQgRgcQgQgbAAgkQAAgiAQgcQARgdAegQQAdgPAjAAQAfAAAZAKQAaAMAQAUIgjAhQgYgcgkAAQgVAAgRAKQgSAJgKASQgJARAAAVQAAAWAJARQAKASASAJQARAKAVAAQAkAAAYgcIAjAhQgQAUgaALQgZALgfAAQgjAAgdgQg");
	this.shape_28.setTransform(683,-117.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_29.setTransform(661.275,-117.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_30.setTransform(644.175,-117.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AhmB3IAAjtIBmAAQAgAAAXALQAXAKANATQAMAUAAAaQAAAagMATQgNATgXALQgXALggAAIgvAAIAABBgAgvAJIAtAAQAYAAANgKQANgLAAgUQAAgTgNgLQgNgLgYAAIgtAAg");
	this.shape_31.setTransform(626.875,-117.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("ABMB3IgVgzIhuAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_32.setTransform(600.75,-117.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_33.setTransform(578.675,-117.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AgbB3IAAjAIhMAAIAAgtIDPAAIAAAtIhMAAIAADAg");
	this.shape_34.setTransform(556.65,-117.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_35.setTransform(540.575,-117.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgPQAOgPAAgiIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_36.setTransform(521.575,-117.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AgxBrQgegQgRgcQgQgbAAgkQAAgiAQgcQARgdAegQQAdgPAkAAQAeAAAZAKQAaAMARAUIgkAhQgYgcgkAAQgVAAgRAKQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAVAAQAkAAAYgcIAkAhQgSAUgZALQgZALgfAAQgjAAgdgQg");
	this.shape_37.setTransform(496.05,-117.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_38.setTransform(477.775,-117.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AA2B3IAAhiIhrAAIAABiIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_39.setTransform(458.475,-117.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AgxBrQgegQgRgcQgQgbAAgkQAAgiAQgcQARgdAegQQAdgPAkAAQAeAAAZAKQAaAMARAUIgkAhQgYgcgkAAQgVAAgRAKQgSAJgJASQgKARAAAVQAAAWAKARQAJASASAJQARAKAVAAQAkAAAYgcIAkAhQgSAUgZALQgZALgfAAQgjAAgdgQg");
	this.shape_40.setTransform(432.6,-117.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgPQAOgPAAgiIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_41.setTransform(406.475,-117.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AgaB3IAAjAIhNAAIAAgtIDOAAIAAAtIhLAAIAADAg");
	this.shape_42.setTransform(382.6,-117.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_43.setTransform(648.175,-149.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AgvCZIAAjtIA2AAIAADtgAgzhnIAugxIA5AAIg9Axg");
	this.shape_44.setTransform(630.95,-153.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_45.setTransform(612.8,-149.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("AAuB3IguhCIgBAAIgwAAIAABCIg3AAIAAjtIBnAAQAeAAAXAKQAYALAMAUQANATAAAbQAAAagNASQgNATgXAKIA2BNgAgxAJIAtAAQAXAAAOgKQAMgLAAgTQAAgVgMgLQgOgKgXAAIgtAAg");
	this.shape_46.setTransform(590.65,-149.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("ABMB3IgVgzIhuAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_47.setTransform(564.3,-149.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_48.setTransform(535.025,-149.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_49.setTransform(495.475,-149.85);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_50.setTransform(468.75,-149.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("Ag3BzQgbgHgQgNIATgpQAPALAVAHQAVAHAVAAQAXAAALgHQALgHAAgMQAAgIgHgFQgGgGgLgEIgbgIQgbgFgRgHQgSgGgMgOQgMgOAAgYQAAgVALgQQALgRAXgKQAXgKAfAAQAXAAAVAFQAWAGARAKIgRAqQghgTgiAAQgWAAgKAIQgMAHAAANQAAALAOAHQAMAFAZAGQAcAHAQAGQASAGAMAOQANANAAAYQAAAUgLARQgMARgWAKQgXAKggAAQgdAAgZgIg");
	this.shape_51.setTransform(444.9,-149.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_52.setTransform(545.025,159.525);
	this.shape_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Aj+FSIgThHIgNhaIADiAIAIg+IA5kpIAGguIG6AxIAqAIIAPAFIgfFvIgKAEIgdAOIgYASIgOAOIgSAZIgbA3IgpCSIgsAGIgsADIjtgUg");
	this.shape_53.setTransform(0.0399,-0.0001);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ABD25D").s().p("AjoFSIgWAAIgThHIgNhaIADiBIAIg+IA5kpIAGgtIG6AxIAqAHIAPAGIgfFvIgKADIgdAOIgYATIgOAOIgSAYIgbA4IgpCRIgsAHIgsACg");
	this.shape_54.setTransform(0.025,0.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Aj+FSIgThHIgNhaIADiBIAIg+IA5kpIAGgtIG6AxIAqAHIAPAGIgfFvIgKADIgdAOIgYATIgOAOIgSAYIgbA4IgpCRIhYAJIjtgTg");
	this.shape_55.setTransform(0.0399,0.0004);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF1000").s().p("AjoFSIgWAAIgThHIgNhaIADiBIAIg+IA5kpIAGgtIG6AxIAqAHIAPAGIgfFvIgKADIgdAOIgYATIgOAOIgSAYIgbA4IgpCRIhYAJg");
	this.shape_56.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53}]}).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-177.6,760.7,532.9);


(lib.sn_lorenzo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape.setTransform(609.55,134.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgHg");
	this.shape_1.setTransform(586.725,134.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_2.setTransform(569.325,134.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAYAOQAWAPAOAcQANAbAAAmQAAAngNAbQgOAcgWAOQgYAPgdAAQgdAAgXgPgAghg5QgNATABAmQgBAnANATQAMASAVABQAVgBANgSQANgTAAgnQAAgmgNgTQgNgSgVAAQgVAAgMASg");
	this.shape_3.setTransform(437.15,133);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_4.setTransform(415.225,133.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_5.setTransform(397.425,133);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgKQAFgLAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAWIg2A0IBlAAIAAAtg");
	this.shape_6.setTransform(608.475,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgIAAgPQAAgQgMgIQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_7.setTransform(588.525,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_8.setTransform(570.725,22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAkIhYDJg");
	this.shape_9.setTransform(437.125,21);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_10.setTransform(416.325,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_11.setTransform(398.525,21);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_12.setTransform(615.3,-91.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAbAAAmQAAAngOAbQgNAcgXAOQgWAPgeAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQANASAUABQAWgBAMgSQANgTAAgnQAAgmgNgTQgMgSgWAAQgUAAgNASg");
	this.shape_13.setTransform(591.65,-91.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_14.setTransform(569.375,-90.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_15.setTransform(440.125,-91.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_16.setTransform(419.125,-91.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_17.setTransform(398.825,-90.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_18.setTransform(532.225,-211.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_19.setTransform(512.075,-211.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_20.setTransform(492.175,-212);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_21.setTransform(594.525,-315.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgxBrQgegQgRgcQgRgbAAgkQAAgiARgcQARgdAegQQAdgPAjAAQAgAAAZAKQAYAMARAUIgjAhQgYgcgjAAQgWAAgRAKQgSAJgKASQgJARAAAVQAAAWAJARQAKASASAJQARAKAWAAQAjAAAYgcIAjAhQgQAUgaALQgZALgfAAQgjAAgdgQg");
	this.shape_22.setTransform(568,-315.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgPQAOgPAAgiIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_23.setTransform(541.875,-315.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgaB3IAAhVIhdiYIA7AAIA+BpIBAhpIA2AAIhcCZIAABUg");
	this.shape_24.setTransform(517,-315.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_25.setTransform(494.725,-315.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_26.setTransform(472.2,-315.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgxBrQgegQgRgcQgQgbAAgkQAAgiAQgcQARgdAegQQAdgPAjAAQAgAAAYAKQAaAMAQAUIgjAhQgYgcgjAAQgWAAgRAKQgSAJgKASQgJARAAAVQAAAWAJARQAKASASAJQARAKAWAAQAjAAAYgcIAjAhQgQAUgaALQgZALgfAAQgjAAgdgQg");
	this.shape_27.setTransform(449.55,-315.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_28.setTransform(422.525,-315.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_29.setTransform(624.525,-347.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhnB3IAAgjICCidIiAAAIAAgtIDIAAIAAAjIiCCdICHAAIAAAtg");
	this.shape_30.setTransform(599.05,-347.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_31.setTransform(573.625,-347.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_32.setTransform(549.125,-347.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AAuB3IgthCIgCAAIgwAAIAABCIg4AAIAAjtIBoAAQAeAAAYAKQAXALANAUQAMATAAAbQAAAagMASQgNATgYAKIA2BNgAgxAJIAsAAQAYAAANgKQANgLABgTQgBgVgNgLQgNgKgYAAIgsAAg");
	this.shape_33.setTransform(525.45,-347.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_34.setTransform(497.775,-347.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_35.setTransform(474.375,-347.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_36.setTransform(439.525,-347.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAglAaIBKAAIglhag");
	this.shape_37.setTransform(412.8,-347.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("Ag3BzQgbgHgQgNIASgpQAQALAVAHQAVAHAVAAQAWAAAMgHQALgHAAgMQAAgIgHgFQgGgGgLgEIgbgIQgbgFgRgHQgSgGgMgOQgMgOAAgYQAAgVALgQQALgRAXgKQAXgKAfAAQAXAAAWAFQAVAGAQAKIgRAqQgggTghAAQgWAAgLAIQgMAHABANQgBALANAHQANAFAZAGQAbAHARAGQASAGANAOQAMANAAAYQAAAVgLAQQgMARgXAKQgXAKgfAAQgdAAgZgIg");
	this.shape_38.setTransform(388.95,-347.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_39.setTransform(507.475,-37.175);
	this.shape_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AitABIDzh6IAvBDIAWAaIAXAgIAIASIAEAJIgFAKIgHANIgOANIhiA4IirhRIgZgJIgQgCIgLAAg");
	this.shape_40.setTransform(0.045,-0.0147);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ABD25D").s().p("Ah5AqIgZgJIgQgDIgLAAIAAgdIDzh7IAvBDIAWAaIAXAgIAIASIAEAJIgFALIgHANIgOAMIhiA5g");
	this.shape_41.setTransform(0.025,0.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AitABIDzh6IBcB9IAMAbIgFAKIgHANIgOANIhiA4IirhRIgZgJIgQgCIgLAAg");
	this.shape_42.setTransform(0.0478,-0.0126);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF1000").s().p("Ah5AqIgZgJIgQgDIgLAAIAAgdIDzh7IBcB9IAMAbIgFALIgHANIgOAMIhiA5g");
	this.shape_43.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-375.6,710.3,532.8);


(lib.sanapblo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape.setTransform(434.175,171.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_1.setTransform(413.875,171.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_2.setTransform(393.725,171.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAGIgHAUIgUAxg");
	this.shape_3.setTransform(379.875,183.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_4.setTransform(367.425,171.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA6AAIhmCOIA/AAIAAgrIA0AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_5.setTransform(262.65,170.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_6.setTransform(239.875,170.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgGg");
	this.shape_7.setTransform(218.725,170.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_8.setTransform(204.875,181.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_9.setTransform(192.425,170.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIAzAAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_10.setTransform(435.15,58.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgoQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgSQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAfAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_11.setTransform(411.925,58.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_12.setTransform(390.675,58.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_13.setTransform(376.825,69.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_14.setTransform(364.375,58.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_15.setTransform(258.075,60.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_16.setTransform(244.725,60.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA6AAIhmCOIA+AAIAAgsIA1AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_17.setTransform(228,60.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_18.setTransform(211.475,72.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_19.setTransform(199.025,60.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_20.setTransform(441.075,-49.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_21.setTransform(420.175,-49.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA6AAIhmCOIA/AAIAAgsIA0AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_22.setTransform(397.65,-49.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_23.setTransform(381.125,-38.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_24.setTransform(366.175,-49.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_25.setTransform(265.575,-52.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("Ag1ByQgYgGgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYATAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_26.setTransform(245.775,-52.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_27.setTransform(225.475,-53.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_28.setTransform(209.875,-41.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAXIg2AzIBlAAIAAAtg");
	this.shape_29.setTransform(194.925,-53.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAXAOQAYAPAMAcQAOAbAAAmQAAAngOAbQgMAcgYAOQgXAPgdAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQANASAUABQAWgBAMgSQAMgTAAgnQAAgmgMgTQgMgSgWAAQgUAAgNASg");
	this.shape_30.setTransform(354.3,-172.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_31.setTransform(332.275,-172.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_32.setTransform(314.725,-172.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_33.setTransform(304.925,-161.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_34.setTransform(290.075,-172.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AgxBrQgegQgRgcQgQgcAAgjQAAgjAQgcQARgcAegQQAdgPAjAAQAgAAAYALQAaAKAQAVIgjAhQgYgcgjAAQgWAAgRAKQgSAJgKASQgJARAAAVQAAAWAJASQAKARASAKQARAJAWAAQAjAAAYgcIAjAgQgQAWgaAKQgZALgfAAQgjAAgdgQg");
	this.shape_35.setTransform(419.85,-277.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_36.setTransform(396.375,-277.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AhmB3IAAjtIBmAAQAgAAAXAKQAXALANATQAMAUAAAbQAAAZgMATQgNAUgXAKQgXAKggAAIgvAAIAABCgAgvAIIAtAAQAYAAANgJQANgLAAgTQAAgVgNgLQgNgKgYAAIgtAAg");
	this.shape_37.setTransform(372.625,-277.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_38.setTransform(348.725,-277.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AgaB3IAAjAIhNAAIAAgtIDOAAIAAAtIhMAAIAADAg");
	this.shape_39.setTransform(326.2,-277.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_40.setTransform(301.975,-277.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_41.setTransform(275.25,-277.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgPQAOgPAAghIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_42.setTransform(248.775,-277.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AA2B3IAAhhIhrAAIAABhIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_43.setTransform(221.675,-277.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_44.setTransform(411.125,-309.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_45.setTransform(387.725,-309.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("AhsB3IAAjtIBzAAQAsAAAXAQQAXASAAAcQAAARgIAOQgIAOgPAHQAUAGAMAPQALAPAAAWQAAAggYAQQgYARgvAAgAg1BNIA/AAQAWAAALgGQALgIAAgPQAAgdgsAAIg/AAgAg1gVIA1AAQAVAAAKgGQALgIAAgOQAAgOgLgGQgKgIgVAAIg1AAg");
	this.shape_46.setTransform(363.925,-309.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAglAaIBKAAIglhag");
	this.shape_47.setTransform(337.2,-309.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AhmB3IAAjtIBmAAQAgAAAXALQAXAKANATQAMAUAAAaQAAAagMATQgNATgXALQgXALggAAIgvAAIAABBgAgvAJIAtAAQAYAAANgKQANgLAAgUQAAgUgNgKQgNgLgYAAIgtAAg");
	this.shape_48.setTransform(312.425,-309.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_49.setTransform(275.975,-309.85);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_50.setTransform(249.25,-309.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("Ag3B0QgbgJgQgMIASgpQAQALAVAHQAVAHAVAAQAWAAAMgHQALgHAAgLQAAgJgHgGQgGgFgLgEIgbgIQgbgFgRgHQgSgGgMgOQgMgOAAgYQAAgVALgRQALgQAXgLQAXgJAfAAQAXAAAWAGQAWAEAQALIgRAqQghgTghAAQgWAAgLAIQgLAHAAAMQAAANAMAFQANAGAZAGQAcAGAQAHQASAHANAMQAMAOAAAYQAAAVgLAQQgMASgWAJQgXAKggAAQgcAAgagHg");
	this.shape_51.setTransform(225.4,-309.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_52.setTransform(320.525,1.825);
	this.shape_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AH1FSIgUADIhaATIg/AXIhmA3Ii3CLIgugaIh3g1IhHgTIgPgCIhKgCIhOAMIhWAeIgLgHIgJgIIgIgKIgNgbIgIghIgFgnIAChzIAylvIACgcICLmjIALgYIADgFIAIgCIA2gJIASAgIAmAAIAiADIAzAKIAcAJIA1AZIB2BEIABAwIAAAGIgEASIgRAyQAYCXA8BjQAZApCACcQAWAbAjAbQAUAPAlAaQA8AvABA4g");
	this.shape_53.setTransform(0.0248,0.0485);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ABD25D").s().p("AgDInIh3g1IhHgTIgPgCIhKgCIhOAMIhWAeIgLgHIgJgIIgIgKIgNgbIgIghIgFgnIAChzIAylvIACgcICLmjIALgYIADgFIAIgCIA2gJIASAgIAmAAIAiADIAzAKIAcAJIA1AZIB2BEIABAwIAAAGIgEASIgRAyQAYCXA8BjQAZApCACcQAWAbAjAbIA5ApQA8AvABA4IgUADIhaATIg/AXIhmA3Ii3CLg");
	this.shape_54.setTransform(0.025,0.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AH1FSIgUADIhaATIg/AXIhmA3Ii3CLIgugaIh3g1IhHgTIgPgCIhKgCIhOAMIhWAeIgLgHIgJgIIgIgKIgNgbIgIghIgFgnIAChzIA0mLICLmjIALgYIADgFIAIgCIA2gJIASAgIBIADIAzAKIAcAJIA1AZIB2BEIABAwIAAAGIgEASIgRAyQAYCXA8BjQAZApCACcQAWAbAjAbQAUAPAlAaQA8AvABA4g");
	this.shape_55.setTransform(0.0248,0.0485);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF1000").s().p("AgDInIh3g1IhHgTIgPgCIhKgCIhOAMIhWAeIgLgHIgJgIIgIgKIgNgbIgIghIgFgnIAChzIA0mLICLmjIALgYIADgFIAIgCIA2gJIASAgIBIADIAzAKIAcAJIA1AZIB2BEIABAwIAAAGIgEASIgRAyQAYCXA8BjQAZApCACcQAWAbAjAbIA5ApQA8AvABA4IgUADIhaATIg/AXIhmA3Ii3CLg");
	this.shape_56.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53}]}).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-337.6,555,532.4000000000001);


(lib.saltillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgHg");
	this.shape.setTransform(704.425,223.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_1.setTransform(684.525,223);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_2.setTransform(664.475,223);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_3.setTransform(533.175,222.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_4.setTransform(512.025,222.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAXIg2AzIBlAAIAAAtg");
	this.shape_5.setTransform(492.125,222.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg2IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_6.setTransform(706.325,109.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_7.setTransform(686.425,109.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgPgKgIQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_8.setTransform(664.775,109.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_9.setTransform(531.875,109.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag7B3QgRgEgMgIIAUgoQASALAbAAQAdAAASgRQARgSACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAKQALAJATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_10.setTransform(515.375,109.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgPgKgIQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_11.setTransform(494.375,109.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_12.setTransform(703.875,-2.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_13.setTransform(684.725,-2.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_14.setTransform(668,-2.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA1AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_15.setTransform(535.45,-2.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_16.setTransform(512.975,-2.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhnCOIA+AAIAAgsIA1AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_17.setTransform(491.8,-2.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAglANgcQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAcAAAlQAAAngOAbQgNAcgXAOQgWAPgeAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQANASAUABQAWgBAMgSQANgTAAgnQAAgmgNgTQgMgSgWAAQgUAAgNASg");
	this.shape_18.setTransform(626.4,-122.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAjIhYDKg");
	this.shape_19.setTransform(604.175,-122.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAIAQAAQARAAAKgIQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_20.setTransform(582.525,-122.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKASQAKARARAKQARAJAUAAQAVAAARgJQARgKAJgRQAKgSAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_21.setTransform(700.225,-260.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_22.setTransform(676.825,-260.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_23.setTransform(656.275,-260.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_24.setTransform(639.175,-260.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgaB3IAAjAIhNAAIAAgtIDOAAIAAAtIhLAAIAADAg");
	this.shape_25.setTransform(623.1,-260.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_26.setTransform(603.575,-260.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_27.setTransform(579.05,-260.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("Ag4BzQgagIgQgLIASgqQAQALAVAHQAVAHAVAAQAWAAAMgHQALgHAAgMQAAgIgGgFQgHgHgKgDIgbgHQgcgHgRgGQgRgGgNgOQgMgOAAgYQAAgVALgQQALgSAXgJQAWgKAgAAQAXAAAVAFQAXAGAPAKIgRAqQgggTgiAAQgWAAgLAHQgLAIAAAMQAAAMANAGQANAHAZAFQAbAHASAGQARAGAMANQANAOAAAZQAAAUgMARQgLARgXAJQgWAKggAAQgcAAgbgIg");
	this.shape_28.setTransform(555.2,-260.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_29.setTransform(525.725,-260.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_30.setTransform(503.425,-260.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_31.setTransform(602.025,50.525);
	this.shape_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AhbCZIgGgMIgDgGIgIgLIgVgVIgggYIh9hFIg8iOIBGgBIANgBIAJgDIAKgGIAKgJIDcALIBvATIBAATIA7AZIASAKIAwAiIAaAcIAVAfIAPAkIgmASIgyARIi7Apg");
	this.shape_32.setTransform(-0.0268,0.0111);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ABD25D").s().p("AhhCNIgEgGIgIgLIgUgVIgggXIh9hGIg8iOIBFgBIANgBIAJgCIAKgHIAKgJIDdALIBvATIA/ATIA7AZIASAKIAwAiIAbAcIAUAgIAPAkIgmASIgyARIi6AoIilAQg");
	this.shape_33.setTransform(0.025,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF1000").s().p("AhhCNIgEgGIgIgLIgUgVIgggXIh9hGIg8iOIBFgBIANgBIAJgCIAKgHIAKgJIDdALIBvATIA/ATIA7AZIASAKIAwAiIAbAcIAUAgIAPAkIgmASIgyARIi6AoIilAQg");
	this.shape_34.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_34},{t:this.shape_32}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-288.6,825.7,534.9000000000001);


(lib.rosal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape.setTransform(708.575,325.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAkIhYDJg");
	this.shape_1.setTransform(687.375,325.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAVIg2A0IBlAAIAAAtg");
	this.shape_2.setTransform(666.475,325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_3.setTransform(524.725,325.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_4.setTransform(506.925,325.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_5.setTransform(490.825,325.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_6.setTransform(707.875,214.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_7.setTransform(692.025,214.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_8.setTransform(670.125,214.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_9.setTransform(528.825,212.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_10.setTransform(507.825,212.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_11.setTransform(485.925,212.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_12.setTransform(708.525,100.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_13.setTransform(687.35,100.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_14.setTransform(664.775,100.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_15.setTransform(530.525,101.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWALQgWAKggAAQgZAAgZgHg");
	this.shape_16.setTransform(510.725,101.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_17.setTransform(490.425,101.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgTAJgOQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAOAAATQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAJAUAAQAUAAAMgJQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQAAQARAAAKgHQAKgIAAgNQAAgOgKgJQgKgHgRAAQgQAAgKAHg");
	this.shape_18.setTransform(632.225,-16.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_19.setTransform(609.875,-16.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgOAFgJQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_20.setTransform(588.875,-17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAHIgHATIgUAxg");
	this.shape_21.setTransform(574.875,-5.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_22.setTransform(562.425,-16.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_23.setTransform(678.425,-155.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_24.setTransform(653.9,-155.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("Ag3B0QgbgJgQgMIASgpQAQALAVAHQAVAHAVAAQAWAAAMgHQALgHAAgLQAAgJgHgGQgGgFgLgEIgbgIQgbgFgRgHQgSgGgMgOQgMgOAAgYQAAgVALgRQALgQAXgLQAXgJAfAAQAXAAAWAGQAVAEARALIgRAqQghgTghAAQgWAAgLAIQgLAHAAAMQAAANAMAFQANAGAZAGQAcAGAQAHQASAHANAMQAMAPAAAXQAAAVgLAQQgMASgXAJQgWAKggAAQgcAAgagHg");
	this.shape_25.setTransform(630.05,-155.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_26.setTransform(604.875,-155.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AAuB3IguhCIgBAAIgwAAIAABCIg4AAIAAjtIBoAAQAfAAAWALQAYAKANATQAMAUAAAaQAAAbgMASQgOATgXALIA2BMgAgxAJIAtAAQAXAAAOgKQAMgLAAgUQAAgTgMgLQgOgLgXAAIgtAAg");
	this.shape_27.setTransform(578.85,-155.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_28.setTransform(546.875,-155.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_29.setTransform(524.575,-155.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_30.setTransform(601.025,153.525);
	this.shape_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("ABMGkIANhxIgEhIIgIgqIgNgmIgbg0IgYgeIgqgoIgPgMIg2ghIiZhGIgygTIAAgfIEKhcIBqhkIA/guIATgKIApgTIAjgLIAzgJIAVAAIgFAuIg/FSIgGA/IAABWIACAXIARBbIAOAvIhRCRg");
	this.shape_31.setTransform(0.057,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ABD25D").s().p("ABMGjIANhwIgDhHIgIgrIgNgmIgcg0IgXgdIgqgpIgQgMIg1ghIiZhGIgzgTIAAgeIEKhdIBrhkIA+guIATgKIAqgTIAigKIA0gJIAVAAIgGAtIg/FTIgFA+IAABWIACAXIAQBbIAOAvIhRCQg");
	this.shape_32.setTransform(0.025,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("ABMGkIANhxIgEhIIgIgqIgNgmIgbg0IgYgeIgqgoIgPgMIg2ghIiZhGIgygTIAAgfIEKhcIBqhkIA/guIA8gdIAjgLIAzgJIAVAAIgFAuIg/FSIgGA/IAABWIACAXIARBbIAOAvIhRCRg");
	this.shape_33.setTransform(0.057,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF1000").s().p("ABMGjIANhwIgDhHIgIgrIgNgmIgcg0IgXgdIgqgpIgQgMIg1ghIiZhGIgzgTIAAgeIEKhdIBrhkIA+guIA9gdIAigKIA0gJIAVAAIgGAtIg/FTIgFA+IAABWIACAXIAQBbIAOAvIhRCQg");
	this.shape_34.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-183.6,814.1,531.9);


(lib.rincon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgKQAFgLAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAWIg2A0IBlAAIAAAtg");
	this.shape.setTransform(672.025,138.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgIAAgPQAAgQgMgIQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_1.setTransform(652.075,138.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_2.setTransform(634.275,138.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgIAAgPQAAgQgMgIQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_3.setTransform(501.725,138.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_4.setTransform(481.225,138.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_5.setTransform(462.825,138.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLARgWALQgWALggAAQgZAAgZgGg");
	this.shape_6.setTransform(673.075,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_7.setTransform(652.575,26.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_8.setTransform(634.175,26.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgIAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWALQgWAKggAAQgZAAgZgHg");
	this.shape_9.setTransform(502.275,27.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAIAQAAQARAAAKgIQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_10.setTransform(481.225,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_11.setTransform(462.025,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgSQALgRAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape_12.setTransform(676.475,-85.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_13.setTransform(655.475,-85.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgHg");
	this.shape_14.setTransform(635.175,-85.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_15.setTransform(504.975,-84.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAYAPQAXAOANAcQANAbAAAmQAAAmgNAcQgNAcgXAPQgYAOgdAAQgdAAgXgOgAghg5QgNATABAmQgBAnANASQANATAUAAQAWAAAMgTQAMgSAAgnQAAgmgMgTQgNgTgVAAQgUAAgNATg");
	this.shape_16.setTransform(483,-84.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_17.setTransform(460.725,-84.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_18.setTransform(597.025,-205);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_19.setTransform(575.125,-204.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_20.setTransform(555.225,-205);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_21.setTransform(656.025,-342.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AhCCLQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglghQgRAJgKASQgKAQAAAWQAAAWAKASQAKARARAKQARAJAUAAQAVAAARgJQARgKAJgRQAKgSAAgWQAAgWgKgQQgJgSgRgJQgRgKgVAAQgUAAgRAKgAgehpIAtgxIA5AAIg+Axg");
	this.shape_22.setTransform(627.975,-346.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgxBrQgegQgRgcQgQgcAAgjQAAgjAQgcQARgcAegQQAdgPAjAAQAfAAAZALQAaAKARAVIgkAhQgYgcgkAAQgVAAgRAKQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAVAAQAkAAAYgcIAkAgQgRAWgaAKQgZALgfAAQgjAAgdgQg");
	this.shape_23.setTransform(601.45,-342.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_24.setTransform(575.025,-342.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_25.setTransform(555.725,-342.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AAuB3IgthCIgCAAIgwAAIAABCIg4AAIAAjtIBoAAQAeAAAYAKQAXALANATQAMAUAAAaQAAAbgMASQgNATgYALIA2BMgAgxAJIAsAAQAYAAANgKQANgLABgUQgBgTgNgMQgNgKgYAAIgsAAg");
	this.shape_26.setTransform(538.5,-342.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_27.setTransform(506.525,-342.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_28.setTransform(484.225,-342.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_29.setTransform(568.725,-32.225);
	this.shape_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AkJAqIAVijIDagQIDcgtIAvBZIAPAsIAKAyIgMAeIglA8IgHAPIgGARIg+A0IgjgHIgJAAIgJAAIglAOIgagWIg/gqIhQgkg");
	this.shape_30.setTransform(0.0092,0.0042);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ABD25D").s().p("AAaCgIg/gqIhQgjIiUgpIAVijIDagQIDcgtIAvBZIAPAsIAKAzIgMAdIglA9IgHAOIgGARIg+A0IgjgHIgJAAIgJAAIglAPg");
	this.shape_31.setTransform(0.025,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AkJAqIAVijIDagQIDcgtIAvBZIAPAsIAKAyIgMAeIglA8IgHAPIgGARIg+A0IgjgHIgSAAIglAOIgagWIg/gqIhQgkg");
	this.shape_32.setTransform(0.0092,0.0042);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF1000").s().p("AAaCgIg/gqIhQgjIiUgpIAVijIDagQIDcgtIAvBZIAPAsIAKAzIgMAdIglA9IgHAOIgGARIg+A0IgjgHIgSAAIglAPg");
	this.shape_33.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-370.6,784.5,532.3);


(lib.oxthoc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgGg");
	this.shape.setTransform(489.525,390.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgcAAgmQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAXAPQAYAOANAcQANAbAAAmQAAAmgNAcQgNAcgYAOQgXAPgdAAQgdAAgXgPgAghg5QgNATABAmQgBAnANASQANAUAUAAQAWAAAMgUQAMgSAAgnQAAgmgMgTQgMgSgWAAQgUAAgNASg");
	this.shape_1.setTransform(468.15,390.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgGg");
	this.shape_2.setTransform(445.875,390.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgcAAgmQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAYAPQAXAOANAcQANAbAAAmQAAAmgNAcQgNAcgXAOQgYAPgdAAQgdAAgXgPgAghg5QgMATAAAmQAAAnAMASQAMAUAVAAQAWAAAMgUQAMgSAAgnQAAgmgMgTQgMgSgWAAQgVAAgMASg");
	this.shape_3.setTransform(311,390.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape_4.setTransform(288.1,390.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgGg");
	this.shape_5.setTransform(265.275,390.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgOAFgJQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_6.setTransform(487.625,279);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_7.setTransform(467.575,279.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_8.setTransform(445.675,279.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_9.setTransform(308.675,278.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_10.setTransform(287.575,278.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_11.setTransform(266.425,278.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgSQALgRAVgKQAUgKAaAAQAxAAAcAeQAcAfAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_12.setTransform(484.375,166.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_13.setTransform(465.875,166.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgnAPgeQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_14.setTransform(450.025,166.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag1BzQgYgHgRgNIAWgpQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_15.setTransform(309.975,166.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_16.setTransform(288.925,166.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgnAPgeQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_17.setTransform(267.225,166.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_18.setTransform(413.3,46.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAYAOQAWAPAOAcQANAbAAAmQAAAngNAbQgOAcgWAOQgYAPgdAAQgdAAgXgPgAghg5QgMATAAAmQAAAnAMATQAMASAVABQAWgBAMgSQAMgTAAgnQAAgmgMgTQgMgSgWAAQgVAAgMASg");
	this.shape_19.setTransform(389.65,46.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg2IhlAAIAAgtICmAAIAAAjIg2A+QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_20.setTransform(367.375,46.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_21.setTransform(353.525,57.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_22.setTransform(341.075,46.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgyBrQgdgQgRgcQgRgcAAgjQAAgjARgcQARgcAdgQQAegPAkAAQAeAAAaALQAZAKAQAVIgjAhQgYgcgjAAQgWAAgRAKQgRAJgLASQgJARAAAVQAAAWAJARQALASARAJQARAKAWAAQAjAAAYgcIAjAgQgRAWgZAKQgZALgfAAQgjAAgegQg");
	this.shape_23.setTransform(540.75,-90.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_24.setTransform(513.725,-90.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AA2B3IAAhiIhrAAIAABiIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_25.setTransform(485.625,-90.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_26.setTransform(461.4,-90.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AA5B3Ig5hTIg4BTIg/AAIBYh4IhUh1IA/AAIA1BNIA2hNIA8AAIhTBzIBYB6g");
	this.shape_27.setTransform(438.725,-90.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_28.setTransform(412.275,-90.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_29.setTransform(373.975,-90.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgzBrQgegQgQgcQgRgcAAgjQAAgjARgcQARgcAegQQAdgPAkAAQAgAAAaALQAZAKARAUIgjAhQgagbgjAAQgXAAgRAKQgSAJgKASQgKAQAAAWQAAAWAKARQAKASASAJQARAKAWAAQAYAAASgKIAAhEIAzAAIAABfQgUAPgZAHQgZAIgbAAQgjAAgegQg");
	this.shape_30.setTransform(346.25,-90.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("ABMB3IgVgzIhuAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_31.setTransform(320.4,-90.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_32.setTransform(301.775,-90.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgaB3IAAjAIhNAAIAAgtIDOAAIAAAtIhMAAIAADAg");
	this.shape_33.setTransform(285.7,-90.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_34.setTransform(261.475,-90.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_35.setTransform(234.75,-90.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("Ag3B0QgbgJgQgLIATgqQAPALAVAHQAVAHAVAAQAXAAALgHQALgHAAgMQAAgIgHgGQgGgGgLgDIgbgHQgbgHgRgGQgSgHgMgNQgMgOAAgYQAAgVALgRQALgRAXgKQAXgJAfAAQAXAAAVAFQAWAFARALIgRAqQghgTgiAAQgWAAgKAHQgMAIAAAMQAAANAOAFQAMAHAZAFQAcAHAQAGQASAGAMANQANAOAAAZQAAATgLASQgMAQgWAKQgXAKggAAQgdAAgZgHg");
	this.shape_36.setTransform(210.9,-90.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_37.setTransform(377.375,220.175);
	this.shape_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Ar3CgIgxh0IgMgRIgVgWIACgKIAHgTIAFgJIAQgWIAcgWIAZgMIB4gqIAagOIARgMIBwAMICjgCIAphBIAFgLIANgvIAhgJII+gPIB7gSIAlACIA0ALIBOAgIA7AlIA5A4IAPAUIAGALIAOAfIgKA1IAAAuIAGAoIA2CaIAEAYIACAYIgBANIgHApIgLAeIgogCIgfgFIgQgFIgMgHIgLgIIgIgKIgJgSIgliLIiygeIg3gSIgwgZIgsgiIgfggIg0hHIgVgjIgzAOIgsAVIglAZIgiAdIhBBPIhoCIIgYAXIhiANIhQADIh3gDIhQgIg");
	this.shape_38.setTransform(-0.0232,0.0056);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ABD25D").s().p("AMQE4IgfgGIgQgFIgNgHIgKgIIgIgKIgJgRIgliMIiygeIg3gSIgwgZIgsgiIggggIgzhHIgWgjIgyAPIgsAUIglAZIgiAdIhBBPIhoCIIgYAXIhjANIhPADIh4gDIhQgIIj9guIgxh0IgNgRIgVgVIADgKIAHgUIAFgJIAQgWIAcgVIAYgNIB5gqIAagOIAQgMIBxAMICjgBIAphBIAFgMIANgvIAhgJII9gPIB8gSIAlACIA0ALIBNAgIA8AmIA4A4IAQATIAGALIAOAgIgKA0IgBAvIAHAnIA2CaIAEAYIABAZIAAAMIgIAqIgLAdg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Ar3CgIgxh0IgMgRIgVgWIACgKIAHgTIAFgJIAQgWIAcgWIAZgMIB4gqIAagOIARgMIBwAMICjgCIAphBIAFgLIANgvIAhgJII+gPIB7gSIAlACIA0ALIBOAgIA7AlIA5A4IAPAUIAGALIAOAfIgKA1IAAAuIAGAoIA2CaIAGAwIgBANIgHApIgLAeIgogCIgfgFIgQgFIgMgHIgLgIIgIgKIgJgSIgliLIiygeIg3gSIgwgZIgsgiIgfggIg0hHIgVgjIgzAOIgsAVIglAZIgiAdIipDXIgYAXIhiANIhQADIh3gDIhQgIg");
	this.shape_40.setTransform(-0.0229,0.0056);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF1000").s().p("AMQE4IgfgGIgQgFIgNgHIgKgIIgIgKIgJgRIgliMIiygeIg3gSIgwgZIgsgiIggggIgzhHIgWgjIgyAPIgsAUIglAZIgiAdIipDXIgYAXIhjANIhPADIh4gDIhQgIIj9guIgxh0IgNgRIgVgVIADgKIAHgUIAFgJIAQgWIAcgVIAYgNIB5gqIAagOIAQgMIBxAMICjgBIAphBIAFgMIANgvIAhgJII9gPIB8gSIAlACIA0ALIBNAgIA8AmIA4A4IAQATIAGALIAOAgIgKA0IgBAvIAHAnIA2CaIAFAxIAAAMIgIAqIgLAdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.2,-118.6,646.2,531.9);


(lib.ojodeagua = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape.setTransform(372.75,171);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_1.setTransform(349.975,171);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_2.setTransform(328.825,171.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgKQAFgLAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAWIg2A0IBlAAIAAAtg");
	this.shape_3.setTransform(199.375,171.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_4.setTransform(179.325,171.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_5.setTransform(157.425,172.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_6.setTransform(370.875,61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_7.setTransform(351.725,61.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIA0AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_8.setTransform(335,61.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_9.setTransform(200.075,58.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgPgKgIQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_10.setTransform(184.225,58);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA1AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_11.setTransform(163.3,58.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgPgKgIQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_12.setTransform(373.175,-52.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_13.setTransform(353.225,-52.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_14.setTransform(332.725,-52.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_15.setTransform(201.425,-50.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgKQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_16.setTransform(179.875,-50.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_17.setTransform(158.675,-50.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgQgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_18.setTransform(303.775,-176);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIA0AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_19.setTransform(281.9,-176);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgIAAgPQAAgQgMgIQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_20.setTransform(259.425,-175.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_21.setTransform(245.175,-164.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_22.setTransform(232.725,-176);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_23.setTransform(381.5,-309.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgQQAOgOAAgiIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_24.setTransform(355.025,-309.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgzBrQgdgPgSgcQgQgcAAgkQAAgiAQgcQASgcAegQQAdgQAlAAQAfAAAZAKQAaALARAUIgjAgQgZgaglAAQgVAAgSAJQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAWAAQAXAAAUgKIAAhFIAyAAIAABgQgTAOgaAIQgaAIgZAAQglAAgdgQg");
	this.shape_25.setTransform(328.3,-309.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_26.setTransform(302.45,-309.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_27.setTransform(269.025,-309.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAPAQAcQARAbAAAiQAAAkgRAbQgQAbgeAOQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjAAIgyAAg");
	this.shape_28.setTransform(243.675,-309.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_29.setTransform(204.975,-309.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgvBwQgVgJgNgQIAfglQAUAaAZAAQAgAAAAgoIAAhwIhTAAIAAgsICJAAIAACaQAAArgVAWQgWAWgpAAQgYAAgUgJg");
	this.shape_30.setTransform(179.8,-309.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_31.setTransform(157.875,-309.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2alrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_32.setTransform(267.475,0.975);
	this.shape_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AmqkxICbAOIB5gBIB5gNICWgjIBLBAIC5CDIAuAoIAAAVIhPBTIhOA/Ii6ByIgjCfIg/AFQgBg4g8gvQglgagTgPQgjgbgWgbQiAicgZgpQg8hjgZiXg");
	this.shape_33.setTransform(0.025,0.0005);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ABD25D").s().p("AhLDuIg4gqQgjgbgWgbQiAicgZgpQg8hjgZiXICbAOIB5gBIB5gNICWgjIBLBAIC5CDIAuAoIAAAWIhPBSIhOA/Ii6ByIgjCfIg/AFQgBg4g8gug");
	this.shape_34.setTransform(0.025,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF1000").s().p("AhLDuIg4gqQgjgbgWgbQiAicgZgpQg8hjgZiXICbAOIB5gBIB5gNICWgjIBLBAIC5CDIAuAoIAAAWIhPBSIhOA/Ii6ByIgjCfIg/AFQgBg4g8gug");
	this.shape_35.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_35},{t:this.shape_33}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.6,-337.6,496.6,532.6);


(lib.oct2000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape.setTransform(592.4,140.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_1.setTransform(569.575,140.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgJQAFgKAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_2.setTransform(549.675,140.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAeAAAWAPQAXAOANAcQAOAbAAAmQAAAngOAbQgNAcgXAPQgWAOgeAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANASQANAUAUgBQAWABAMgUQANgSAAgnQAAgmgNgTQgMgTgWAAQgUAAgNATg");
	this.shape_3.setTransform(421.65,141.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_4.setTransform(399.425,141.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgJQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_5.setTransform(378.525,141.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_6.setTransform(591.975,28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAglANgcQANgcAXgPQAXgOAdAAQAdAAAYAOQAWAPAOAcQANAcAAAlQAAAngNAbQgOAcgWAOQgYAPgdAAQgdAAgXgPgAghg5QgMATAAAmQAAAnAMATQAMASAVABQAWgBAMgSQAMgTAAgnQAAgmgMgTQgMgSgWAAQgVAAgMASg");
	this.shape_7.setTransform(575.05,28.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_8.setTransform(552.775,28.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_9.setTransform(423.025,28.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAeAAAWAPQAXAOANAcQAOAbAAAmQAAAngOAbQgNAcgXAPQgWAOgeAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANASQAMAUAVgBQAVABANgUQANgSAAgnQAAgmgNgTQgNgTgVAAQgVAAgMATg");
	this.shape_10.setTransform(401.05,28.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_11.setTransform(378.775,28.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgQAVgIQAVgIAaAAQAbAAAVAIQAVAIALAQQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAARQAAAPAMAJQAMAJAUAAQAUAAAMgJQAMgJAAgPQAAgRgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQAAQARAAAKgIQAKgIAAgOQAAgOgKgHQgKgJgRAAQgQAAgKAJg");
	this.shape_12.setTransform(595.175,-83.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_13.setTransform(573.475,-83.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_14.setTransform(551.825,-83.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_15.setTransform(423.725,-83.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_16.setTransform(401.325,-83.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_17.setTransform(379.625,-83.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA1AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_18.setTransform(524.3,-203.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgIAAgPQAAgQgMgIQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_19.setTransform(501.825,-203.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_20.setTransform(481.275,-203.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_21.setTransform(467.425,-192.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_22.setTransform(454.975,-203.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAglANgcQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAcAAAlQAAAmgOAcQgNAcgXAPQgWAOgeAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANATQANASAUAAQAWAAAMgSQANgTAAgnQAAgmgNgTQgMgTgWAAQgUAAgNATg");
	this.shape_23.setTransform(628.55,-342);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAglANgcQANgcAXgPQAXgOAdAAQAeAAAXAOQAWAPAOAcQANAcAAAlQAAAmgNAcQgOAcgWAPQgXAOgeAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMATQAMASAVAAQAVAAANgSQANgTAAgnQAAgmgNgTQgNgTgVAAQgVAAgMATg");
	this.shape_24.setTransform(605.45,-342);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAglANgcQANgcAXgPQAXgOAdAAQAdAAAYAOQAXAPANAcQANAcAAAlQAAAmgNAcQgNAcgXAPQgYAOgdAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMATQAMASAVAAQAWAAAMgSQAMgTAAgnQAAgmgMgTQgMgTgWAAQgVAAgMATg");
	this.shape_25.setTransform(582.35,-342);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_26.setTransform(560.325,-342.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_27.setTransform(526.825,-342);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgxBrQgegPgRgcQgQgdAAgjQAAgiAQgdQARgcAegPQAdgQAjAAQAfAAAZAKQAaALAQAVIgjAgQgYgbgkAAQgVAAgRAJQgSAKgKARQgJASAAAVQAAAWAJASQAKAQASALQARAJAVAAQAkAAAYgcIAjAgQgQAWgaAKQgZALgfAAQgjAAgdgQg");
	this.shape_28.setTransform(500.3,-342);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgQQAOgPAAggIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_29.setTransform(474.175,-341.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgaB3IAAhVIhdiYIA7AAIA+BpIBAhpIA2AAIhcCYIAABVg");
	this.shape_30.setTransform(449.3,-342);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_31.setTransform(427.025,-342);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgaB3IAAjAIhNAAIAAgtIDOAAIAAAtIhLAAIAADAg");
	this.shape_32.setTransform(404.5,-342);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgxBrQgegPgRgcQgQgdAAgjQAAgiAQgdQARgcAegPQAdgQAjAAQAfAAAZAKQAaALARAVIgkAgQgYgbgkAAQgVAAgRAJQgRAKgKARQgKASAAAVQAAAWAKASQAKAQARALQARAJAVAAQAkAAAYgcIAkAgQgRAWgaAKQgZALgfAAQgjAAgdgQg");
	this.shape_33.setTransform(381.85,-342);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_34.setTransform(354.825,-342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_35.setTransform(492.825,-32.375);
	this.shape_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AgHBiIgMgbIg8hOIgggvIAYgSIAKgFIAkgOIATgEIAmgDIAMABIAeAGIAPAGIApBxIAAAyIgaABIhOASg");
	this.shape_36.setTransform(-0.0633,0.0088);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ABD25D").s().p("AgUBHIg8hNIgggwIAYgSIAKgFIAkgOIATgDIAmgDIAMAAIAeAGIAPAGIApBxIAAAyIgaABIhOASIgRABg");
	this.shape_37.setTransform(0.025,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AgHBiIgMgbIhch9IAYgSIAVgKIAZgJIAngGIAeAAIAeAGIAPAGIApBxIAAAyIgaABIhOASg");
	this.shape_38.setTransform(-0.0705,0.0342);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF1000").s().p("AgUBHIhch9IAYgSIAVgKIAZgJIAngGIAeAAIAeAGIAPAGIApBxIAAAyIgaABIhOASIgRABg");
	this.shape_39.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-369.8,686.3000000000001,534.9);


(lib.nenamicoyan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAjIhYDKg");
	this.shape.setTransform(658.725,429.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAjIhYDKg");
	this.shape_1.setTransform(637.625,429.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_2.setTransform(616.475,429.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgSQALgRAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape_3.setTransform(478.775,430.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgSQALgRAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape_4.setTransform(457.125,430.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgHg");
	this.shape_5.setTransform(435.875,430.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape_6.setTransform(657.625,317.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgHg");
	this.shape_7.setTransform(637.675,317.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIAzAAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_8.setTransform(616.5,317.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_9.setTransform(482.125,317.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_10.setTransform(460.475,317.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_11.setTransform(437.95,317.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgoQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgSQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAfAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_12.setTransform(667.275,206.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_13.setTransform(648.775,206.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAYAPQAXAOANAcQANAbAAAmQAAAmgNAcQgNAcgXAPQgYAOgdAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMASQAMATAVAAQAWAAAMgTQAMgSAAgnQAAgmgMgTQgMgTgWAAQgVAAgMATg");
	this.shape_14.setTransform(631.85,206.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_15.setTransform(615.875,217.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_16.setTransform(603.425,206.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgJQAFgKAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_17.setTransform(480.425,206);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgnAPgeQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_18.setTransform(460.375,206.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgoQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgSQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAfAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_19.setTransform(438.075,206.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_20.setTransform(583.125,86.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgTAJgOQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAOAAATQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAJAUAAQAUAAAMgJQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQAAQARAAAKgHQAKgIAAgNQAAgOgKgJQgKgHgRAAQgQAAgKAHg");
	this.shape_21.setTransform(566.525,86.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_22.setTransform(544.175,86.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAHIgHATIgUAxg");
	this.shape_23.setTransform(529.225,97.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_24.setTransform(516.775,86.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_25.setTransform(674.975,-19.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_26.setTransform(648.25,-19.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgbB3IAAhVIhciYIA7AAIA/BpIA/hpIA2AAIhcCZIAABUg");
	this.shape_27.setTransform(623.7,-19.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_28.setTransform(597.875,-19.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgyBrQgdgQgRgbQgRgcAAgkQAAgiARgcQARgcAdgQQAegQAkAAQAeAAAaAKQAZAMAQAUIgjAgQgYgbgjAAQgWAAgRAJQgRAKgLARQgJASAAAVQAAAWAJARQALARARAKQARAKAWAAQAjAAAYgcIAjAhQgRAUgZALQgZALgfAAQgjAAgegQg");
	this.shape_29.setTransform(571.35,-19.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_30.setTransform(553.075,-19.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_31.setTransform(531.275,-19.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_32.setTransform(502.05,-19.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_33.setTransform(475.275,-19.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_34.setTransform(450.775,-19.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_35.setTransform(425.025,-19.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_36.setTransform(666.025,-51.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AhnB3IAAgjICCidIiAAAIAAgtIDIAAIAAAjIiCCdICHAAIAAAtg");
	this.shape_37.setTransform(640.55,-51.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_38.setTransform(615.125,-51.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_39.setTransform(590.625,-51.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AAuB3IguhCIgBAAIgwAAIAABCIg4AAIAAjtIBoAAQAfAAAXAKQAXALANAUQAMATAAAbQAAAagMASQgNATgYAKIA2BNgAgxAJIAsAAQAZAAANgKQAMgLAAgTQAAgVgMgLQgNgKgZAAIgsAAg");
	this.shape_40.setTransform(566.95,-51.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_41.setTransform(539.275,-51.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_42.setTransform(515.875,-51.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_43.setTransform(481.025,-51.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_44.setTransform(454.3,-51.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("Ag4BzQgagHgQgNIASgpQAQALAVAHQAVAHAVAAQAXAAALgHQALgHAAgMQAAgIgHgFQgGgHgKgDIgcgHQgbgHgRgGQgRgGgNgOQgMgOAAgYQAAgVALgQQALgRAXgKQAXgKAfAAQAXAAAWAFQAWAGAPAKIgRAqQgggTghAAQgXAAgLAHQgLAIABANQgBALANAHQANAFAZAGQAbAGASAHQARAGANAOQAMAOAAAYQAAATgMARQgLASgXAJQgWAKggAAQgdAAgagIg");
	this.shape_45.setTransform(430.45,-51.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_46.setTransform(548.675,259.425);
	this.shape_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AgjE+Ih1iUIh8ixIgthTIBKhrIAihGIAPgxIBpAXIAlAFIA9gCIApgFIBXBdIASARIAbATIAmARIAJADIBMAOIgDBmIAEAqIAUBRIh1B+IgnAhIg1AhIgjAPIgaAIIgpAHg");
	this.shape_47.setTransform(0.0078,-0.0125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ABD25D").s().p("AiYCqIh8iyIgthTIBKhqIAihGIAPgxIBpAXIAlAEIA9gBIApgFIBXBdIASAQIAbATIAmASIAJADIBMAOIgDBmIAEAqIAUBQIh1B+IgnAiIg1AhIgjAPIgaAHIgpAIIguACg");
	this.shape_48.setTransform(0.025,0.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AgjE+Ih1iUIh8ixIgthTIBKhrIAihGIAPgxIBpAXIAlAFIBmgHIBXBdIAtAkIAmARIAJADIBMAOIgDBmIAEAqIAUBRIh1B+IgnAhIg1AhIgjAPIgaAIIgpAHg");
	this.shape_49.setTransform(0.0078,-0.0125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF1000").s().p("AiYCqIh8iyIgthTIBKhqIAihGIAPgxIBpAXIAlAEIBmgGIBXBdIAtAjIAmASIAJADIBMAOIgDBmIAEAqIAUBQIh1B+IgnAiIg1AhIgjAPIgaAHIgpAIIguACg");
	this.shape_50.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47}]}).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.1,-79.6,766.1,532.9);


(lib.mexicalt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DATOS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABMB3IgVgzIhuAAIgVAzIg4AAIBqjtIA1AAIBqDtgAgmAaIBLAAIglhag");
	this.shape.setTransform(503.2,163.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_1.setTransform(484.575,163.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AAuB3IguhCIgBAAIgwAAIAABCIg3AAIAAjtIBnAAQAeAAAXAKQAYALAMAUQANATAAAbQAAAagNASQgNATgXAKIA1BNgAgxAJIAtAAQAYAAANgKQAMgLAAgTQAAgVgMgLQgNgKgYAAIgtAAg");
	this.shape_2.setTransform(467.35,163.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_3.setTransform(439.675,163.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_4.setTransform(414.8,163.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgyBrQgdgPgRgdQgRgbAAgkQAAgjARgcQARgbAdgRQAegPAjAAQAgAAAZALQAZAKAQAVIgjAgQgYgbgjAAQgWAAgRAKQgRAJgLASQgJARAAAVQAAAWAJASQALAQARALQARAJAWAAQAjAAAYgcIAjAgQgQAWgaAKQgZALgfAAQgjAAgegQg");
	this.shape_5.setTransform(392.15,163.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_6.setTransform(373.875,163.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgbB3IhmjtIA7AAIBICpIBKipIA2AAIhnDtg");
	this.shape_7.setTransform(355.65,163.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_8.setTransform(470.15,114.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_9.setTransform(448.075,114.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_10.setTransform(416.175,114.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAQAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjABIgyAAg");
	this.shape_11.setTransform(390.825,114.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_12.setTransform(562.825,65.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_13.setTransform(540.525,65.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgQQAOgOAAgiIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_14.setTransform(515.075,66.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgzBrQgegPgQgcQgRgcAAgkQAAgiARgcQARgcAegQQAdgQAkAAQAgAAAaAKQAZALARAUIgjAgQgagagjAAQgXAAgRAJQgSAKgKARQgKASAAAVQAAAWAKARQAKARASAKQARAKAWAAQAYAAASgKIAAhFIAzAAIAABgQgUAOgZAIQgZAIgbAAQgjAAgegQg");
	this.shape_15.setTransform(488.35,65.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_16.setTransform(469.925,65.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_17.setTransform(448.125,65.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_18.setTransform(408.575,65.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_19.setTransform(381.85,65.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag3B0QgbgJgQgMIASgpQAQALAVAHQAVAHAVAAQAXAAALgHQALgHAAgLQAAgJgHgGQgGgFgKgEIgcgIQgbgFgRgHQgRgGgNgOQgMgOAAgYQAAgVALgRQALgQAXgLQAXgJAfAAQAXAAAWAGQAWAEAPALIgRAqQgggTghAAQgXAAgLAIQgLAHABAMQgBANANAFQANAGAZAGQAbAGASAHQARAHANAMQAMAOAAAYQAAAVgLAQQgMASgXAJQgWAKggAAQgdAAgZgHg");
	this.shape_20.setTransform(358,65.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_21.setTransform(323.825,65.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_22.setTransform(299.325,65.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_23.setTransform(548.225,17);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhCCLQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglghQgRAJgKASQgKAQAAAWQAAAWAKASQAKARARAKQARAJAUAAQAVAAARgJQARgKAJgRQAKgSAAgWQAAgWgKgQQgJgSgRgJQgRgKgVAAQgUAAgRAKgAgehpIAtgxIA5AAIg+Axg");
	this.shape_24.setTransform(520.175,13.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_25.setTransform(500.225,17);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgyBrQgdgPgRgdQgRgbAAgkQAAgjARgcQARgbAdgRQAegPAjAAQAgAAAZALQAYAKARAVIgjAgQgYgbgjAAQgWAAgRAJQgSAKgKASQgJARAAAVQAAAWAJASQAKAQASALQARAJAWAAQAjAAAYgcIAjAgQgQAWgaAKQgZALgfAAQgjAAgegQg");
	this.shape_26.setTransform(482.5,17);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_27.setTransform(456.8,17);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_28.setTransform(427.525,17);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AAuB3IguhCIgBAAIgwAAIAABCIg4AAIAAjtIBoAAQAfAAAXAKQAXALANAUQAMATAAAbQAAAagMASQgNATgYAKIA2BNgAgxAJIAsAAQAZAAANgKQANgLgBgTQABgVgNgLQgNgKgZAAIgsAAg");
	this.shape_29.setTransform(399.65,17);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKASQgKARAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgRQgJgSgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_30.setTransform(371.975,17);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AhZB3IAAjtICzAAIAAAsIh8AAIAAA/IBuAAIAAAsIhuAAIAABWg");
	this.shape_31.setTransform(347.65,17);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_32.setTransform(322.125,17);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_33.setTransform(302.825,17);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBrDtgAgmAaIBLAAIglhag");
	this.shape_34.setTransform(548.3,-31.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_35.setTransform(524.75,-31.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("Ag4B0QgagJgQgLIASgqQAQALAVAHQAVAHAVAAQAWAAAMgHQALgHAAgMQAAgIgGgGQgHgGgKgDIgbgHQgcgHgRgGQgRgHgNgNQgMgOAAgYQAAgVALgRQALgRAXgKQAWgJAgAAQAXAAAVAFQAXAFAPALIgRAqQgggTgiAAQgWAAgLAHQgLAIAAAMQAAANANAFQANAHAZAFQAbAHASAGQARAGAMANQANAOAAAZQAAATgMASQgLAQgXAKQgWAKggAAQgcAAgbgHg");
	this.shape_36.setTransform(503.45,-31.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_37.setTransform(481.825,-31.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_38.setTransform(445.875,-31.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AAvB3IguhCIgCAAIgwAAIAABCIg3AAIAAjtIBnAAQAfAAAWAKQAYALAMATQANAUAAAaQAAAbgNASQgMATgYALIA1BMgAgxAJIAtAAQAYAAAMgKQAOgLAAgUQAAgTgOgMQgMgKgYAAIgtAAg");
	this.shape_39.setTransform(419.85,-31.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AgzBrQgegQgQgcQgRgcAAgjQAAgjARgcQAQgcAegQQAegPAlAAQAfAAAaALQAZAKARAUIgjAhQgZgbgkAAQgXAAgRAKQgRAJgLASQgJAQgBAWQABAWAJARQALASARAJQARAKAWAAQAXAAAUgKIAAhEIAyAAIAABfQgTAPgaAHQgaAIgaAAQgjAAgegQg");
	this.shape_40.setTransform(393.15,-31.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_41.setTransform(369.525,-31.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_42.setTransform(347,-31.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_43.setTransform(322.775,-31.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_44.setTransform(303.475,-31.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_45.setTransform(499.875,-80.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("AgzBrQgdgPgSgcQgQgcAAgkQAAgiAQgcQARgcAfgQQAdgQAkAAQAgAAAZAKQAaALARAUIgjAgQgZgaglAAQgVAAgSAJQgRAKgKARQgLASABAVQgBAWALARQAKARARAKQARAKAWAAQAYAAASgKIAAhFIAzAAIAABgQgTAOgaAIQgaAIgaAAQgkAAgdgQg");
	this.shape_46.setTransform(480.95,-80.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_47.setTransform(457.325,-80.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_48.setTransform(431.575,-80.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_49.setTransform(412.275,-80.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_50.setTransform(388.075,-80.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_51.setTransform(365.775,-80.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_52.setTransform(561.275,-225.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AgzBrQgegQgQgcQgRgcAAgjQAAgjARgcQAQgcAegQQAegPAlAAQAfAAAaALQAZAKARAUIgjAhQgZgbgkAAQgXAAgRAKQgRAJgLASQgJAQgBAWQABAWAJARQALASARAJQARAKAWAAQAXAAAUgKIAAhEIAyAAIAABfQgTAPgaAHQgaAIgaAAQgjAAgegQg");
	this.shape_53.setTransform(533.55,-225.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_54.setTransform(506.975,-225.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_55.setTransform(478.925,-225.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#999999").s().p("AgbB3IAAjAIhMAAIAAgtIDOAAIAAAtIhLAAIAADAg");
	this.shape_56.setTransform(454.05,-225.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_57.setTransform(434.525,-225.85);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_58.setTransform(410,-225.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#999999").s().p("AgyBrQgdgQgRgcQgQgcgBgjQABgjAQgcQARgcAdgQQAegPAkAAQAeAAAZALQAZAKASAVIgkAhQgYgcgkAAQgVAAgRAKQgSAJgJASQgKARAAAVQAAAWAKARQAJASASAJQARAKAVAAQAkAAAYgcIAkAgQgSAWgZAKQgZALgfAAQgjAAgegQg");
	this.shape_59.setTransform(384.8,-225.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_60.setTransform(366.525,-225.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#999999").s().p("AA5B3Ig5hTIg4BTIg/AAIBYh4IhUh1IA/AAIA1BNIA2hNIA8AAIhTBzIBYB6g");
	this.shape_61.setTransform(348.775,-225.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_62.setTransform(325.875,-225.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_63.setTransform(297.625,-225.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("EgesAntMAAAhPZMA9ZAAAMAAABPZg");
	this.shape_64.setTransform(454.35,77.6);
	this.shape_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AEYi7Ig0BfQgZBEATBFQALAnAaA+Qg2BWgQA5IgZABIgfAJIhqAyIgoixIhCABIgfAGIgmAQIhSAxIgwgRIAUhdIAog4IAbg1IARgxIAIgvIgEhEIgThBIhCiLQBQArBMAOQAnAHBUADQBJADAtANQBDATBHA2g");
	this.shape_65.setTransform(-0.0471,-0.2018);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#ABD25D").s().p("AgOCqIhBABIgfAGIgnAPIhRAyIgxgSIAVhdIAog4IAbg1IARgwIAHgwIgEhDIgShBIhCiLQBPArBNAOQAnAHBTADQBJACAtANQBEAUBHA2Ig0BfQgaBDAUBFQALAnAaA/Qg3BVgPA5IgZACIggAJIhqAxg");
	this.shape_66.setTransform(0.025,0.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF1000").s().p("AgOCqIhBABIgfAGIgnAPIhRAyIgxgSIAVhdIAog4IAbg1IARgwIAHgwIgEhDIgShBIhCiLQBPArBNAOQAnAHBTADQBJACAtANQBEAUBHA2Ig0BfQgaBDAUBFQALAnAaA/Qg3BVgPA5IgZACIggAJIhqAxg");
	this.shape_67.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65}]}).to({state:[{t:this.shape_67},{t:this.shape_65}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-253.6,679.8,585.3);


(lib.mataxhi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape.setTransform(701.125,-31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AA2B3IAAhhIhrAAIAABhIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_1.setTransform(681.825,-31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AA5B3Ig5hSIg4BSIg/AAIBYh4IhUh1IA/AAIA1BNIA2hNIA8AAIhTBzIBYB6g");
	this.shape_2.setTransform(655.925,-31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_3.setTransform(630.8,-31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgaB3IAAjAIhNAAIAAgtIDOAAIAAAtIhLAAIAADAg");
	this.shape_4.setTransform(607.25,-31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_5.setTransform(583.75,-31.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_6.setTransform(554.475,-31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAVIg2A0IBlAAIAAAtg");
	this.shape_7.setTransform(713.625,451);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_8.setTransform(693.675,451.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgJQAFgKAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_9.setTransform(541.025,449);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_10.setTransform(520.775,449.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgnAPgeQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_11.setTransform(714.225,336.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_12.setTransform(692.375,336.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQAAQARAAAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_13.setTransform(541.625,336.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_14.setTransform(519.725,336.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgJQALgKAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_15.setTransform(721.075,226.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_16.setTransform(699.175,226.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_17.setTransform(681.775,226.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAeAAAWAPQAXAOANAcQAOAbAAAmQAAAngOAbQgNAcgXAPQgWAOgeAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANASQAMAUAVgBQAVABANgUQANgSAAgnQAAgmgNgTQgNgTgVAAQgVAAgMATg");
	this.shape_18.setTransform(546.85,225.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_19.setTransform(524.575,225.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_20.setTransform(507.175,225.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgJQALgKAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_21.setTransform(644.425,105.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgJQALgKAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_22.setTransform(622.775,105.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_23.setTransform(601.125,104.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("AsyAAIZlAA");
	this.shape_24.setTransform(623.475,-51.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AFld3IAAnFIRPAAIAAHFgA2zdvIAAnFIRPAAIAAHFgAFiNDIAAnFIROAAIAAHFgA2CMYIAAnFIRPAAIAAHFgA2zk+IAAnFIRPAAIAAHFgAFilmIAAnFIROAAIAAHFgAoW46IAAk8ISbAAIAAE8g");
	this.shape_25.setTransform(617.775,283.2);
	this.shape_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AH8h1IgJAiIghBIIhRB3IgjACIgpAIIhEAUIiYBBIjnCJIhsBVIhCBCIgNAQIhHgeIgqAoIg7gJIgFgtIgBhWIAQhjIAKglIAehHIAdgxIAwg/IBKhHIA0gqIAJgtIABgeIgXi4IB4gLID+gBIApgYIAhgdIBdhdIAZgRIAUgJIAhgLIAngGIBaECIAHAZIAJAyg");
	this.shape_26.setTransform(0.027,-0.0139);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ABD25D").s().p("An1H8IgFgtIgBhXIAQhjIAKglIAehGIAdgxIAwg/IBKhHIA0gqIAJgtIABgeIgXi4IB4gLID+gBIApgZIAhgcIBdhdIAZgRIAUgJIAhgLIAngHIBaEDIAHAZIAJAxIAFBCIgJAhIghBIIhRB3IgjADIgpAIIhEAUIiYBAIjnCKIhsBVIhCBCIgNAQIhHgeIgqAog");
	this.shape_27.setTransform(0.025,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AH8h1IgJAiIghBIIhRB3IhMAKIhEAUIiYBBIjnCJIhsBVIhCBCIgNAQIhHgeIgqAoIg7gJIgFgtIgBhWIAQhjIAKglIAehHIAdgxIAwg/IBKhHIA0gqIAJgtIABgeIgXi4IB4gLID+gBIApgYIAhgdIBdhdIAZgRIAUgJIAhgLIAngGIBaECIAQBLg");
	this.shape_28.setTransform(0.027,-0.0139);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF1000").s().p("An1H8IgFgtIgBhXIAQhjIAKglIAehGIAdgxIAwg/IBKhHIA0gqIAJgtIABgeIgXi4IB4gLID+gBIApgZIAhgcIBdhdIAZgRIAUgJIAhgLIAngHIBaEDIAQBKIAFBCIgJAhIghBIIhRB3IhMALIhEAUIiYBAIjnCKIhsBVIhCBCIgNAQIhHgeIgqAog");
	this.shape_29.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26}]}).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.7,-59.3,815.5,533.6);


(lib.maqueda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape.setTransform(704.85,365.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgIQAVgJAaAAQAbAAAVAJQAVAIALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAARQAAAPAMAJQAMAJAUAAQAUAAAMgJQAMgJAAgPQAAgRgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAIAAANQAAAOAKAIQAKAIAQAAQARAAAKgIQAKgIAAgOQAAgNgKgIQgKgJgRAAQgQAAgKAJg");
	this.shape_1.setTransform(681.525,365.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_2.setTransform(527.925,365.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_3.setTransform(508.775,365.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_4.setTransform(495.425,365.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAglANgcQANgcAXgPQAXgOAdAAQAdAAAYAOQAWAPAOAcQANAcAAAlQAAAngNAbQgOAcgWAOQgYAPgdAAQgdAAgXgPgAghg5QgMATAAAmQAAAnAMATQAMASAVABQAWgBAMgSQAMgTAAgnQAAgmgMgTQgNgSgVAAQgVAAgMASg");
	this.shape_5.setTransform(710.95,254.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgJAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgMQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape_6.setTransform(688.925,253.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_7.setTransform(671.375,254.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_8.setTransform(532.525,252.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_9.setTransform(512.225,253.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_10.setTransform(494.825,253.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAJAUgBQAUABAMgJQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahJQgKAHAAAOQAAAOAKAIQAKAHAQAAQARAAAKgHQAKgIAAgOQAAgOgKgHQgKgIgRAAQgQAAgKAIg");
	this.shape_11.setTransform(714.425,141.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_12.setTransform(692.825,141.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_13.setTransform(672.525,140.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_14.setTransform(535.725,140.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLARgWALQgWALggAAQgZAAgZgGg");
	this.shape_15.setTransform(514.175,140.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgJQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_16.setTransform(493.875,139.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBviWIA7AAIhoCOIA/AAIAAgrIA0AAIAAArIAoAAIAAAtIgoAAIAAAyg");
	this.shape_17.setTransform(624.4,22.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_18.setTransform(604.325,22.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYATAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgGg");
	this.shape_19.setTransform(588.575,22.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBrDtgAgmAaIBLAAIglhag");
	this.shape_20.setTransform(717.05,-115.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAOAQAbQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_21.setTransform(690.675,-115.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_22.setTransform(665.125,-115.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgQQAOgPAAggIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_23.setTransform(639.675,-115.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AAYCJQgWgMgagdQgggDgagRQgZgRgOgbQgOgaAAgeQAAgkAQgbQASgcAdgQQAegQAlgBQAkABAdAQQAeAQARAcQARAbAAAkQAAAogXAfQgXAggmAMQAIAJAIADQAIAEAJABQAWAAARgSIAYAdQgMAOgQAIQgQAHgUAAQgbAAgVgLgAgrhbQgRAKgKARQgKARABAXQgBAVAKARQAKARARAKQARAJAVAAQAUAAARgJQARgKAJgRQAKgRAAgVQAAgXgKgRQgJgRgRgKQgRgKgUAAQgVAAgRAKg");
	this.shape_24.setTransform(612.55,-113.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_25.setTransform(584.6,-115.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_26.setTransform(555.325,-115.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_27.setTransform(516.5,-115.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_28.setTransform(494.425,-115.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_29.setTransform(606.025,194.175);
	this.shape_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("ABwkJIAPACIAbAGIB0AuIAoAGIAGABIAVC3Ig0AJIgiALIgqASIgTAKIg+AuIhsBkIkJBcIhbhIIAEhWICThPICYheIBGg/IAigqIASgeIAOgfg");
	this.shape_30.setTransform(0.0182,0.0113);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ABD25D").s().p("AlQDCIAEhXICThPICYheIBGg/IAigqIASgdIAOggIAJggIAPABIAbAHIB0AuIAoAFIAGABIAVC4IgzAJIgjAKIgpASIgUAKIg+AuIhrBkIkJBdg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("ABwkJIAPACIAbAGIB0AuIAoAGIAGABIAVC3Ig0AJIgiALIg9AcIg+AuIhsBkIkJBcIhbhIIAEhWICThPICYheIBGg/IAigqIAgg9g");
	this.shape_32.setTransform(0.0182,0.0113);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF1000").s().p("AlQDCIAEhXICThPICYheIBGg/IAigqIAgg9IAJggIAPABIAbAHIB0AuIAoAFIAGABIAVC4IgzAJIgjAKIg9AcIg+AuIhrBkIkJBdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-143.6,825.7,531.9);


(lib.manzanas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIAUgmQAMAJAQAFQAQAFARAAQASAAALgHQAKgIAAgNQAAgOgLgIQgLgGgagBIg4AAIALh4ICDAAIAAAoIhaAAIgDApIASAAQAtAAAWATQAVARAAAeQABAUgKAQQgLARgTAJQgVAKgdAAQgXABgWgHg");
	this.shape.setTransform(533.15,125.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_1.setTransform(514.625,125.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgvBsIBMivIhHAAIAAAjIgsAAIAAhLICtAAIAAAgIhRC3g");
	this.shape_2.setTransform(494.75,125.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AAQBsIAAgtIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgoIAvAAIAAAoIAkAAIAAApIgkAAIAAAtg");
	this.shape_3.setTransform(363.875,126.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgvBsIBNiuIhHAAIAAAjIgtAAIAAhNICtAAIAAAhIhRC3g");
	this.shape_4.setTransform(343.15,126.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgvBsIBMiuIhHAAIAAAjIgsAAIAAhNICtAAIAAAhIhQC3g");
	this.shape_5.setTransform(323.95,126.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgvBoQgXgGgQgLIAUgmQANAJAQAFQAQAFARAAQASAAALgHQALgIAAgNQAAgbgoABIgWAAIAAghIArgyIhbAAIAAgpICWAAIAAAhIgxA4QAdAFAPAQQAPAQABAYQAAATgLAQQgJAQgVAKQgUAJgcABQgYAAgVgHg");
	this.shape_6.setTransform(529.6,13.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgDBsIAAivIgrAAIAAgpIBdAAIAADYg");
	this.shape_7.setTransform(513.75,13.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgvBoQgVgIgMgPQgLgQABgUQAAgRAIgNQAJgNAPgHQgMgHgHgMQgGgLAAgPQAAgSALgOQAKgOATgIQATgHAYAAQAYAAAUAHQASAIALAOQAKAOAAASQABAPgHALQgGAMgNAHQAQAHAJANQAIANAAARQABAUgMAQQgMAPgVAIQgUAIgbAAQgbAAgUgIgAgdAVQgLAJABAOQgBAOALAJQALAIASAAQATAAAKgIQAMgJAAgOQAAgOgMgJQgKgIgTAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAKgHQAIgHABgMQgBgNgIgHQgKgIgPAAQgPAAgJAIg");
	this.shape_8.setTransform(498.65,13.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQAMgRAAgjQAAgjgMgRQgLgRgUAAQgTAAgKARg");
	this.shape_9.setTransform(362.65,13.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_10.setTransform(342.625,13.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgvBoQgVgIgMgPQgLgQAAgUQABgRAIgNQAJgNAPgHQgMgHgGgMQgHgLAAgPQAAgSALgOQAKgOATgIQATgHAYAAQAZAAASAHQATAIALAOQALAOgBASQABAPgHALQgGAMgNAHQAQAHAJANQAJANgBARQAAAUgMAQQgLAPgVAIQgUAIgbAAQgbAAgUgIgAgdAVQgKAJAAAOQAAAOAKAJQALAIASAAQATAAAKgIQAMgJAAgOQAAgOgMgJQgKgIgTAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAKgHQAJgHAAgMQAAgNgJgHQgKgIgPAAQgPAAgJAIg");
	this.shape_11.setTransform(323.7,13.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIATgmQANAJAQAFQAQAFARAAQASAAALgIQALgHAAgNQAAgOgMgIQgLgGgbAAIg3AAIALh6ICDAAIAAApIhZAAIgEApIASAAQAtAAAWASQAVASAAAeQABAUgLARQgKAQgTAKQgVAJgdABQgWAAgXgHg");
	this.shape_12.setTransform(544.6,-98.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AAQBsIAAgtIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgoIAvAAIAAAoIAkAAIAAApIgkAAIAAAtg");
	this.shape_13.setTransform(525.325,-98.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIATgmQANAJAQAFQAQAFARAAQASAAALgIQAKgHAAgNQAAgOgLgIQgLgGgaAAIg4AAIALh6ICDAAIAAApIhaAAIgDApIASAAQAtAAAWASQAVASABAeQAAAUgKARQgLAQgTAKQgVAJgcABQgYAAgWgHg");
	this.shape_14.setTransform(504.8,-98.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgaA0IAOgwQgIgEgEgGQgFgGAAgKQAAgNAJgJQAIgHAMgBQANABAJAHQAIAJAAANQAAAHgCAFIgGASIgSAsg");
	this.shape_15.setTransform(491.825,-88.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDBsIAAivIgrAAIAAgpIBdAAIAADYg");
	this.shape_16.setTransform(480.5,-98.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_17.setTransform(373.575,-100.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgvBoQgVgIgMgPQgLgQABgUQAAgRAIgNQAJgNAPgHQgMgHgHgMQgGgLAAgPQAAgSALgOQAKgOATgIQATgHAYAAQAYAAAUAHQASAIALAOQAKAOAAASQAAAPgGALQgGAMgNAHQAQAHAJANQAIANAAARQABAUgMAQQgMAPgVAIQgUAIgbAAQgbAAgUgIgAgdAVQgLAJAAAOQAAAOALAJQALAIASAAQASAAALgIQALgJAAgOQAAgOgLgJQgLgIgSAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAKgHQAIgHABgMQgBgNgIgHQgKgIgPAAQgPAAgJAIg");
	this.shape_18.setTransform(353.2,-100.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_19.setTransform(333.375,-100.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgaA1IAOgyQgIgCgEgHQgFgHAAgJQAAgNAJgIQAIgJAMABQANgBAJAJQAIAIAAANQAAAGgCAHIgGARIgSAtg");
	this.shape_20.setTransform(319.175,-89.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgCBtIAAiwIgsAAIAAgoIBdAAIAADYg");
	this.shape_21.setTransform(307.85,-100.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgCBsIAAivIgsAAIAAgpIBdAAIAADYg");
	this.shape_22.setTransform(464.8,-219.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgwBoQgWgGgQgLIAUgmQANAJAQAFQAQAFARAAQASAAALgHQALgIAAgNQAAgbgoABIgWAAIAAghIArgyIhcAAIAAgpICXAAIAAAhIgwA4QAcAEAPARQAPAPAAAZQAAATgKAQQgKAQgUAJQgUALgdAAQgWAAgXgHg");
	this.shape_23.setTransform(450.2,-218.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_24.setTransform(432.075,-219.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgaA1IAOgyQgIgCgEgHQgFgGAAgKQAAgNAJgJQAIgHAMgBQANABAJAHQAIAJAAANQAAAGgCAHIgGARIgSAtg");
	this.shape_25.setTransform(419.325,-208.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgwBoQgWgGgQgLIAUgmQANAJAQAFQAQAFARAAQASAAALgHQALgIAAgNQAAgbgoABIgWAAIAAghIArgyIhcAAIAAgpICXAAIAAAhIgwA4QAcAEAPARQAPAPAAAZQABATgLAQQgJAQgVAJQgUALgdAAQgXAAgWgHg");
	this.shape_26.setTransform(405.55,-218.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgzBpQgXgHgPgLIARgmQAOAKATAGQATAHAUAAQAUAAAKgHQALgGAAgLQAAgHgHgFQgGgGgJgDIgZgHQgZgFgPgGQgQgGgLgMQgMgNAAgWQAAgTALgPQAKgPAUgKQAVgIAdAAQAUAAAUAFQAUAEAPAKIgQAmQgdgRgfAAQgUAAgKAHQgKAGAAAMQAAALAMAFQALAGAXAFQAZAGAQAGQAQAGALALQALANAAAWQAAASgKAQQgKAPgVAJQgVAJgdAAQgZAAgZgHg");
	this.shape_27.setTransform(552.525,-359.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("ABFBsIgTguIhkAAIgUAuIgyAAIBgjYIAxAAIBhDYgAgiAYIBEAAIgihSg");
	this.shape_28.setTransform(530.8,-359.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AA6BsIhriCIAACCIgyAAIAAjYIAqAAIBrCDIAAiDIAyAAIAADYg");
	this.shape_29.setTransform(506.375,-359.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("ABFBsIgTguIhkAAIgUAuIgyAAIBgjYIAxAAIBhDYgAgiAYIBEAAIgihSg");
	this.shape_30.setTransform(482,-359.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AheBsIAAggIB2iOIh0AAIAAgqIC2AAIAAAhIh2CPIB7AAIAAAog");
	this.shape_31.setTransform(459.975,-359.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AA6BsIhriCIAACCIgyAAIAAjYIAqAAIBrCDIAAiDIAyAAIAADYg");
	this.shape_32.setTransform(436.775,-359.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("ABFBsIgUguIhjAAIgTAuIg0AAIBhjYIAwAAIBhDYgAgiAYIBEAAIgihSg");
	this.shape_33.setTransform(412.4,-359.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("ABLBsIAAiBIhABrIgVAAIhAhoIAAB+IgwAAIAAjYIAqAAIBQCGIBRiGIApAAIABDYg");
	this.shape_34.setTransform(385.7,-359.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AgzBpQgXgHgPgLIARgmQAOAKATAGQATAHAUAAQAUAAAKgHQALgGAAgLQAAgHgHgFQgGgGgJgDIgZgHQgZgFgPgGQgQgGgLgMQgMgNAAgWQAAgTALgPQAKgPAUgKQAVgIAdAAQAUAAAUAFQAUAEAPAKIgQAmQgdgRgfAAQgUAAgKAHQgKAGAAAMQAAALAMAFQALAGAXAFQAZAGAQAGQAQAGALALQALANAAAWQAAASgKAQQgKAPgVAJQgVAJgdAAQgZAAgZgHg");
	this.shape_35.setTransform(352.225,-359.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("ABFBsIgUguIhjAAIgTAuIg0AAIBhjYIAwAAIBhDYgAgiAYIBEAAIgihSg");
	this.shape_36.setTransform(330.5,-359.65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AhPBsIAAjYIAzAAIAACwIBsAAIAAAog");
	this.shape_37.setTransform(310.425,-359.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_38.setTransform(434.425,-48.375);
	this.shape_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AhVB6Ig+jeIASgBIB8gRIBngDIAYAkIAQAfIALA2IgfBmIgpAUg");
	this.shape_39.setTransform(-0.0661,-0.0038);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ABD25D").s().p("AhVB6Ig+jfIASgBIB7gQIBngDIAZAkIAPAfIAMA2IggBlIgoAVg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF1000").s().p("AhVB6Ig+jfIASgBIB7gQIBngDIAZAkIAPAfIAMA2IggBlIgoAVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-385.2,633,532.8);


(lib.majuay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape.setTransform(652.425,287.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgOAFgJQAFgKAAgKQAAgOgKgIQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_1.setTransform(631.425,287.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgGg");
	this.shape_2.setTransform(480.275,286.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgGg");
	this.shape_3.setTransform(460.125,286.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_4.setTransform(652.275,173.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_5.setTransform(631.975,173.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgHg");
	this.shape_6.setTransform(480.275,174.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgHg");
	this.shape_7.setTransform(460.125,174.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgcAAgmQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAYAOQAXAPAMAcQAOAbAAAmQAAAmgOAcQgMAcgXAOQgYAPgdAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANASQANAUAUAAQAVAAANgUQAMgSAAgnQAAgmgMgTQgNgSgVAAQgUAAgNASg");
	this.shape_8.setTransform(652.2,62.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag1ByQgYgGgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYAUQAYASAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_9.setTransform(630.275,62.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_10.setTransform(481.025,62.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_11.setTransform(459.475,62.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_12.setTransform(580.375,-57.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAbAAAmQAAAngOAbQgNAcgXAOQgWAPgeAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQAMATAVAAQAVAAANgTQANgTAAgnQAAgmgNgTQgNgSgVAAQgVAAgMASg");
	this.shape_13.setTransform(557.65,-57.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_14.setTransform(538.125,-57.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgbB3IAAhVIhciYIA7AAIA/BqIA/hqIA2AAIhdCYIAABVg");
	this.shape_15.setTransform(651.85,-195.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_16.setTransform(627.35,-195.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgQQAOgPAAggIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_17.setTransform(600.875,-195.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgvBwQgVgJgNgRIAfgkQATAaAaAAQAgAAAAgnIAAhxIhTAAIAAgsICJAAIAACZQAAAsgVAWQgWAWgpAAQgYAAgUgJg");
	this.shape_18.setTransform(576.7,-195.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_19.setTransform(556.1,-195.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_20.setTransform(526.825,-195.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_21.setTransform(491.975,-195.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_22.setTransform(469.675,-195.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_23.setTransform(560.025,114.525);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AjWAVIBRiPIEDAUIBXgJIgnB+IgUApIgIANIgfAoIgOAOIiFgGIg5gIIhpgbg");
	this.shape_24.setTransform(0.1032,0.0185);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ABD25D").s().p("AgfB1Ig5gIIhpgbIgUg9IBRiPIEDAUIBXgJIgnB+IgUApIgIANIgfAoIgOAOg");
	this.shape_25.setTransform(0.025,0.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF1000").s().p("AgfB1Ig5gIIhpgbIgUg9IBRiPIEDAUIBXgJIgnB+IgUApIgIANIgfAoIgOAOg");
	this.shape_26.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24}]}).to({state:[{t:this.shape_26},{t:this.shape_24}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-223.6,767.4,534);


(lib.magueycitos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape.setTransform(620.925,120.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_1.setTransform(599.225,120.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_2.setTransform(449.575,119.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_3.setTransform(428.675,119.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIAzAAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_4.setTransform(621.45,7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_5.setTransform(598.875,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgQgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_6.setTransform(450.125,8.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgJQALgKAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_7.setTransform(429.125,8.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAjIhYDKg");
	this.shape_8.setTransform(626.675,-103.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgNAFgLQAFgJAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape_9.setTransform(605.775,-103.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_10.setTransform(588.225,-103.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgJQAFgKAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_11.setTransform(455.975,-104.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhnCOIBAAAIAAgsIAzAAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_12.setTransform(435.05,-104.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_13.setTransform(414.975,-104.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgSAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape_14.setTransform(549.925,-224.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_15.setTransform(528.925,-224.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgNAFgLQAFgJAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape_16.setTransform(507.275,-224.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag3B0QgbgJgQgLIATgqQAPALAVAHQAVAHAVAAQAWAAAMgHQALgHAAgMQAAgIgHgGQgGgGgLgDIgbgHQgbgHgRgGQgSgHgMgNQgMgOAAgYQAAgVALgRQALgRAXgKQAXgJAfAAQAXAAAWAFQAVAFARALIgRAqQghgTghAAQgWAAgLAHQgLAIAAAMQAAANAMAFQANAHAZAFQAcAHAQAGQASAGANANQAMAOAAAZQAAATgLASQgMAQgWAKQgXAKggAAQgcAAgagHg");
	this.shape_17.setTransform(647.5,-360.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_18.setTransform(622.325,-360.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgaB3IAAjAIhNAAIAAgtIDOAAIAAAtIhLAAIAADAg");
	this.shape_19.setTransform(597.45,-360.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_20.setTransform(581.375,-360.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgxBrQgegQgRgcQgQgcAAgjQAAgjAQgcQARgcAegQQAdgPAkAAQAeAAAZALQAaAKARAVIgkAhQgYgcgkAAQgVAAgRAKQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAVAAQAkAAAYgcIAkAgQgRAWgaAKQgZALgfAAQgjAAgdgQg");
	this.shape_21.setTransform(563.65,-360.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgbB3IAAhVIhciYIA7AAIA/BqIA/hqIA2AAIhdCZIAABUg");
	this.shape_22.setTransform(539.45,-360.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_23.setTransform(517.175,-360.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgPQAOgPAAgiIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_24.setTransform(491.725,-360.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgzBrQgegQgRgcQgQgcAAgjQAAgjAQgcQARgcAegQQAegPAlAAQAfAAAZALQAaAKARAUIgjAhQgZgbglAAQgVAAgSAKQgSAJgJASQgKAQAAAWQAAAWAKARQAJASASAJQARAKAWAAQAXAAAUgKIAAhEIAyAAIAABfQgTAPgaAHQgZAIgaAAQglAAgdgQg");
	this.shape_25.setTransform(465,-360.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_26.setTransform(439.15,-360.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_27.setTransform(409.875,-360.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_28.setTransform(529.025,-52.475);
	this.shape_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Aj+g9IAGgRIAHgPIAlg8IAMgeIBwAhIBMARIAPACIAAAdIALAAIAQADIAZAJICsBRIABAnIABAHIAFAJIACADIALALIgdB8IgRAAIgzgHIhBgUIg9gdg");
	this.shape_29.setTransform(0.0009,-0.048);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ABD25D").s().p("ADRC3IgzgGIhBgUIg9gdIkei9IAGgSIAHgOIAlg8IAMgeIBwAhIBMARIAPABIAAAeIALAAIAQADIAZAJICsBRIABAmIABAIIAFAJIACACIALAMIgdB8g");
	this.shape_30.setTransform(0.025,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF1000").s().p("ADRC3IgzgGIhBgUIg9gdIkei9IAGgSIAHgOIAlg8IAMgeIBwAhIBMARIAPABIAAAeIALAAIAQADIAZAJICsBRIABAmIABAIIAFAJIACACIALAMIgdB8g");
	this.shape_31.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).to({state:[{t:this.shape_31},{t:this.shape_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-388.6,736.5,531.9000000000001);


(lib.magueyal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgvBtIBMiwIhHAAIAAAjIgsAAIAAhLICtAAIAAAgIhQC4g");
	this.shape.setTransform(561,115.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgwBoQgWgGgQgLIAUgnQANAKAQAFQAQAFARAAQASAAALgHQALgIAAgNQAAgOgMgIQgLgGgbgBIg3AAIALh4ICDAAIAAAoIhZAAIgEApIASAAQAtAAAWATQAWARgBAeQAAAUgKAQQgKARgTAJQgVAKgdAAQgWABgXgHg");
	this.shape_1.setTransform(542,115.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_2.setTransform(523.525,115.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgwBoQgUgIgLgPQgMgQAAgUQAAgRAJgNQAIgNAQgHQgMgHgHgMQgGgLAAgPQAAgSAKgOQALgOATgIQATgHAYAAQAYAAATAHQATAIALAOQALAOAAASQgBAPgGALQgHAMgMAHQAQAHAJANQAJANAAARQgBAUgMAQQgLAPgUAIQgVAIgbAAQgaAAgWgIgAgdAVQgLAJAAAOQAAAOALAJQALAIASAAQASAAAMgIQALgJgBgOQABgOgLgJQgMgIgSAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAJgHQAJgHAAgMQAAgNgJgHQgJgIgPAAQgPAAgJAIg");
	this.shape_3.setTransform(390.7,116.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgvBoQgXgGgQgLIAUgmQANAJAQAFQAQAFARAAQASAAALgHQALgIAAgNQAAgbgoABIgWAAIAAghIArgyIhbAAIAAgpICWAAIAAAhIgwA4QAcAFAPAQQAPAQABAYQAAATgLAQQgJAQgVAKQgUAJgcABQgYgBgVgGg");
	this.shape_4.setTransform(370.75,116.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_5.setTransform(352.625,116.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AAQBsIAAgtIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgnIAvAAIAAAnIAkAAIAAApIgkAAIAAAtg");
	this.shape_6.setTransform(561.425,4.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgwBoQgUgIgLgPQgLgQAAgUQgBgRAJgNQAIgNAQgHQgMgHgHgMQgGgLAAgPQAAgSALgOQAKgOATgIQATgHAYAAQAYAAAUAHQATAIAKAOQAKAOAAASQAAAPgGALQgHAMgMAHQAQAHAJANQAJANAAARQgBAUgLAQQgMAPgUAIQgVAIgbAAQgaAAgWgIgAgdAVQgLAJAAAOQAAAOALAJQALAIASAAQASAAALgIQALgJAAgOQAAgOgLgJQgLgIgSAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAJgHQAJgHAAgMQAAgNgJgHQgJgIgPAAQgPAAgJAIg");
	this.shape_7.setTransform(540.2,4.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_8.setTransform(520.425,4.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgwBoQgUgIgLgPQgMgQAAgUQAAgRAJgNQAIgNAQgHQgMgHgHgMQgGgLAAgPQAAgSAKgOQALgOATgIQATgHAYAAQAYAAATAHQATAIALAOQALAOAAASQgBAPgGALQgHAMgMAHQAQAHAJANQAJANAAARQgBAUgMAQQgLAPgUAIQgVAIgbAAQgaAAgWgIgAgdAVQgLAJAAAOQAAAOALAJQALAIASAAQASAAAMgIQALgJgBgOQABgOgLgJQgMgIgSAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAJgHQAJgHAAgMQAAgNgJgHQgJgIgPAAQgPAAgJAIg");
	this.shape_9.setTransform(388.9,3.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgvBoQgVgIgMgPQgKgQgBgUQAAgRAJgNQAIgNAQgHQgMgHgGgMQgHgLAAgPQAAgSAKgOQALgOATgIQATgHAYAAQAZAAASAHQAUAIAKAOQALAOAAASQAAAPgHALQgGAMgNAHQAQAHAJANQAJANAAARQAAAUgNAQQgLAPgUAIQgVAIgbAAQgaAAgVgIgAgdAVQgKAJAAAOQAAAOAKAJQALAIASAAQATAAALgIQAKgJABgOQgBgOgKgJQgLgIgTAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAJgHQAKgHgBgMQABgNgKgHQgJgIgPAAQgPAAgJAIg");
	this.shape_10.setTransform(368.45,3.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_11.setTransform(348.675,3.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgCBsIAAivIgsAAIAAgpIBdAAIAADYg");
	this.shape_12.setTransform(561.1,-109.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgwBoQgWgGgQgLIAUgmQANAJAQAFQAQAFARAAQASAAALgHQALgIAAgNQAAgbgoAAIgWAAIAAggIArgyIhcAAIAAgpICXAAIAAAhIgwA4QAcAFAPAQQAPAQAAAYQAAATgKAQQgKAQgUAKQgUAJgdABQgWgBgXgGg");
	this.shape_13.setTransform(546.5,-109.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIATgmQANAJAQAFQAQAFARAAQASAAALgIQALgHAAgNQAAgOgMgHQgLgIgaABIg4AAIALh6ICDAAIAAApIhZAAIgEApIASAAQAtAAAWASQAVASAAAeQABAUgLARQgKAQgTAKQgVAJgdABQgXgBgWgGg");
	this.shape_14.setTransform(528.4,-109.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag1BsQgQgEgLgHIASglQAQALAZAAQAbAAAQgQQAQgRABgeQgTATgiAAQgVAAgRgIQgRgIgKgPQgKgPAAgUQAAgWALgQQALgRATgJQATgIAXAAQAsAAAaAbQAaAcAAA0QAAAkgOAaQgOAbgZANQgZAOggAAQgRAAgQgEgAgehBQgKAIAAAPQAAAPAKAJQALAJAQAAQAQAAAKgJQALgJAAgPQAAgOgLgJQgKgJgQAAQgQAAgLAJg");
	this.shape_15.setTransform(389.325,-108.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_16.setTransform(370.175,-108.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgwBoQgWgGgQgLIAVgnQAMAKAQAFQAQAFARAAQASAAALgHQALgIAAgNQgBgOgKgIQgMgHgbAAIg4AAIAMh4ICDAAIAAAoIhaAAIgCApIARAAQAtAAAVATQAXAQAAAfQAAAUgLAQQgJARgVAJQgUALgcgBQgXAAgXgGg");
	this.shape_17.setTransform(350.5,-108.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgeg0QgLARAAAjQAAAjALARQAMASASAAQAUAAALgSQALgRAAgjQAAgjgLgRQgLgRgUAAQgSAAgMARg");
	this.shape_18.setTransform(489.15,-229.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgeg0QgLARAAAjQAAAjALARQAMASASAAQAUAAALgSQALgRAAgjQAAgjgLgRQgLgRgUAAQgSAAgMARg");
	this.shape_19.setTransform(468.1,-229.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgDBtIAAiwIgrAAIAAgpIBdAAIAADZg");
	this.shape_20.setTransform(450.35,-229.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgaA0IAOgwQgIgEgEgFQgFgIAAgJQAAgNAJgIQAIgIAMAAQANAAAJAIQAIAIAAANQAAAHgCAFIgGASIgSAsg");
	this.shape_21.setTransform(441.425,-218.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDBtIAAiwIgrAAIAAgpIBdAAIAADZg");
	this.shape_22.setTransform(430.1,-229.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhPBtIAAjYIAzAAIAACuIBsAAIAAAqg");
	this.shape_23.setTransform(568.075,-369.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("ABFBtIgUgvIhjAAIgUAvIgzAAIBhjYIAxAAIBgDYgAgiAYIBEAAIgihSg");
	this.shape_24.setTransform(545.7,-369.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgYBtIAAhOIhUiKIA1AAIA5BgIA6hgIAxAAIhUCKIAABOg");
	this.shape_25.setTransform(523.325,-369.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhTBtIAAjYICjAAIAAAoIhxAAIAAAvIBkAAIAAAmIhkAAIAAAyIB1AAIAAApg");
	this.shape_26.setTransform(503.025,-369.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhHBUQgagZAAgwIAAh4IAyAAIAAB2QAAA7AvgBQAYAAAMgNQAMgOAAgfIAAh2IAyAAIAAB4QAAAwgaAZQgaAaguAAQguAAgZgag");
	this.shape_27.setTransform(479.825,-369.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AguBiQgbgPgPgZQgQgaAAggQAAggAQgZQAPgaAbgOQAcgOAgAAQAdAAAXAJQAYAKAPASIggAeQgXgZghAAQgUAAgQAJQgQAJgJAQQgJAPAAAUQAAAUAJAQQAJAPAQAJQAQAJATAAQAWAAASgJIAAg/IAuAAIAABXQgTAOgXAHQgXAHgXAAQgiAAgagOg");
	this.shape_28.setTransform(455.4,-369.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("ABFBtIgUgvIhjAAIgUAvIgzAAIBhjYIAxAAIBgDYgAgiAYIBEAAIgihSg");
	this.shape_29.setTransform(431.85,-369.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("ABMBtIgBiCIhABqIgVAAIhAhnIAAB/IgvAAIAAjYIApAAIBQCGIBQiGIAqAAIABDYg");
	this.shape_30.setTransform(405.15,-369.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AhPBtIAAjYIAzAAIAACuIBsAAIAAAqg");
	this.shape_31.setTransform(373.425,-369.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhTBtIAAjYICjAAIAAAoIhxAAIAAAvIBkAAIAAAmIhkAAIAAAyIB1AAIAAApg");
	this.shape_32.setTransform(353.075,-369.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_33.setTransform(463.225,-58.775);
	this.shape_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AhbC1IAIgTIAXgmIA7hIIAHgNIARgkIAEgQIADgTIABgWIjhh7IAAgyIB/gEICzAOIAUAUIA+DfIghAkIiCBmIgZAaIgVAgIgFAJIgpgQIgJgIIgGgGg");
	this.shape_34.setTransform(0.0283,0.0655);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ABD25D").s().p("Ag9DYIgJgIIgGgHIgOgUIAIgSIAWgmIA7hIIAIgNIAQglIAEgQIADgTIABgVIjhh8IAAgxIB/gFICzAPIAVAUIA+DfIgiAkIiBBlIgZAbIgWAgIgEAJg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AhbC1IAIgTIAXgmIA7hIIAHgNIARgkIAEgQIAEgpIjhh7IAAgyIB/gEICzAOIAUAUIA+DfIghAkIiCBmIgZAaIgVAgIgFAJIgpgQIgJgIIgGgGg");
	this.shape_36.setTransform(0.0283,0.0655);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF1000").s().p("Ag9DYIgJgIIgGgHIgOgUIAIgSIAWgmIA7hIIAIgNIAQglIAEgQIAEgoIjhh8IAAgxIB/gFICzAPIAVAUIA+DfIgiAkIiBBlIgZAbIgWAgIgEAJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34}]}).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-394.8,664,532.4);


(lib.loyola = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape.setTransform(691.675,412.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_1.setTransform(678.325,412.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_2.setTransform(520.025,414.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_3.setTransform(503.925,414.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAYAOQAXAPANAcQANAbAAAmQAAAngNAbQgNAcgXAOQgYAPgdAAQgdAAgXgPgAghg5QgMATAAAmQAAAnAMATQAMASAVABQAWgBAMgSQAMgTAAgnQAAgmgMgTQgMgSgWAAQgVAAgMASg");
	this.shape_4.setTransform(695.3,302.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg2IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_5.setTransform(673.025,302.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_6.setTransform(522.025,300.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgGg");
	this.shape_7.setTransform(505.925,300.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_8.setTransform(696.225,189.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_9.setTransform(675.425,189.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_10.setTransform(523.025,188.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYATAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgGg");
	this.shape_11.setTransform(507.275,188.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAJQAMAKAUAAQAUAAAMgKQAMgJAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahJQgKAHAAAPQAAANAKAIQAKAHAQAAQARAAAKgHQAKgIAAgNQAAgPgKgHQgKgIgRAAQgQAAgKAIg");
	this.shape_12.setTransform(624.475,69.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAYAPQAXAOANAcQANAbAAAmQAAAngNAbQgNAcgXAPQgYAOgdAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMASQAMAUAVgBQAWABAMgUQAMgSAAgnQAAgmgMgTQgMgSgWgBQgVABgMASg");
	this.shape_13.setTransform(601.7,69.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_14.setTransform(582.175,69.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_15.setTransform(664.25,-39.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_16.setTransform(642.175,-39.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_17.setTransform(616.325,-39.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgaB3IAAhVIhdiYIA7AAIA+BpIBAhpIA2AAIhdCYIAABVg");
	this.shape_18.setTransform(590.45,-39.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_19.setTransform(564.625,-39.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_20.setTransform(541.225,-39.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_21.setTransform(743.125,-71.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAPAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_22.setTransform(717.775,-71.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKASQAKARARAKQARAJAUAAQAVAAARgJQARgKAJgRQAKgSAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_23.setTransform(679.075,-71.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_24.setTransform(659.125,-71.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgxBrQgegQgRgcQgQgcAAgjQAAgjAQgcQARgcAegQQAdgPAkAAQAeAAAZALQAZAKASAVIgkAhQgYgcgkAAQgVAAgRAKQgRAJgKASQgKARAAAVQAAAWAKASQAKARARAKQARAJAVAAQAkAAAYgcIAkAgQgSAWgZAKQgZALgfAAQgjAAgdgQg");
	this.shape_25.setTransform(641.4,-71.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_26.setTransform(615.7,-71.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_27.setTransform(588.925,-71.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgzBrQgdgQgSgcQgQgcAAgjQAAgjAQgcQASgcAegQQAdgPAkAAQAgAAAZALQAaAKARAUIgjAhQgZgbglAAQgVAAgSAKQgSAJgJASQgKAQAAAWQAAAWAKASQAJARASAKQARAJAWAAQAYAAASgKIAAhEIAzAAIAABfQgTAPgaAHQgaAIgZAAQglAAgdgQg");
	this.shape_28.setTransform(561.85,-71.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_29.setTransform(543.425,-71.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_30.setTransform(514.525,-71.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("ABMB3IgVgzIhuAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_31.setTransform(487.8,-71.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("Ag4BzQgagIgQgLIATgqQAPALAVAHQAVAHAVAAQAXAAALgHQALgHAAgMQAAgIgGgFQgHgHgKgDIgbgHQgcgHgRgGQgRgGgNgOQgMgOAAgYQAAgVALgQQALgSAXgJQAWgKAgAAQAXAAAVAFQAXAGAPAKIgRAqQgggTgiAAQgWAAgLAHQgKAIgBAMQABAMANAGQAMAHAZAFQAcAHARAGQARAGAMANQANAOAAAZQAAAUgMARQgLARgXAJQgWAKggAAQgcAAgbgIg");
	this.shape_32.setTransform(463.95,-71.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_33.setTransform(602.525,242.275);
	this.shape_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("ABbDNIgjhKIgZglIgbgbIgcgTIgPgHIgfgIIgggBIg0AIIhzAqIjMBTIgaggIAMgQIBChCIBshTIDoiKICYhAIBEgVIBMgKIAsBTIB9CzIB0CSIgqAzIgmAdIg6AaIhCARIgbgDIgTgEIh0guIgcgGg");
	this.shape_34.setTransform(0.0271,0.0075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ABD25D").s().p("AENEHIgTgEIh0guIgcgGIgPgCIgjhKIgZglIgbgbIgcgTIgPgHIgfgIIgggBIg0AIIhzAqIjMBTIgaggIAMgQIBChCIBshTIDoiKICYhAIBEgVIBMgKIAsBTIB9CzIB0CSIgqAzIgmAdIg6AaIhCARg");
	this.shape_35.setTransform(0.025,0.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF1000").s().p("AENEHIgTgEIh0guIgcgGIgPgCIgjhKIgZglIgbgbIgcgTIgPgHIgfgIIgggBIg0AIIhzAqIjMBTIgaggIAMgQIBChCIBshTIDoiKICYhAIBEgVIBMgKIAsBTIB9CzIB0CSIgqAzIgmAdIg6AaIhCARg");
	this.shape_36.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34}]}).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-99.6,841,536.9);


(lib.llanogrande = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAaQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape.setTransform(661.875,183.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_1.setTransform(641.325,183);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_2.setTransform(484.825,183.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_3.setTransform(462.975,183.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAjIhYDKg");
	this.shape_4.setTransform(670.625,72.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAYAOQAWAPAOAcQANAbAAAmQAAAngNAbQgOAcgWAOQgYAPgdAAQgdAAgXgPgAghg5QgMATAAAmQAAAnAMATQAMASAVABQAVgBANgSQANgTAAgnQAAgmgNgTQgNgSgVAAQgVAAgMASg");
	this.shape_5.setTransform(648.65,72.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_6.setTransform(629.125,72.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAbAAAmQAAAngOAbQgNAcgXAOQgWAPgeAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQANASAUABQAWgBAMgSQANgTAAgnQAAgmgNgTQgMgSgWAAQgUAAgNASg");
	this.shape_7.setTransform(486.45,72.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_8.setTransform(466.925,72.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_9.setTransform(453.575,72.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_10.setTransform(669.525,-40.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgQgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_11.setTransform(647.225,-40.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_12.setTransform(628.725,-40.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_13.setTransform(491.625,-39.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgQgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_14.setTransform(471.075,-40.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_15.setTransform(452.575,-40.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgKQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_16.setTransform(587.125,-160.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape_17.setTransform(565.375,-160.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_18.setTransform(543.425,-160.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_19.setTransform(695.975,-297.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAQAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjABIgyAAg");
	this.shape_20.setTransform(670.625,-297.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_21.setTransform(642.125,-297.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_22.setTransform(615.4,-297.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AAuB3IgthCIgCAAIgwAAIAABCIg4AAIAAjtIBoAAQAeAAAYAKQAXALANATQAMAUAAAaQAAAbgMASQgNATgYALIA2BMgAgxAJIAsAAQAYAAANgKQANgLABgUQgBgTgNgMQgNgKgYAAIgsAAg");
	this.shape_23.setTransform(590.7,-297.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgzBrQgegQgRgcQgQgcAAgjQAAgjAQgcQARgcAegQQAegPAlAAQAfAAAZALQAaAKARAUIgjAhQgZgbglAAQgVAAgSAKQgSAJgJASQgKAQAAAWQAAAWAKARQAJASASAJQARAKAWAAQAXAAAUgKIAAhEIAyAAIAABfQgTAPgaAHQgZAIgaAAQglAAgdgQg");
	this.shape_24.setTransform(564,-297.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_25.setTransform(527.225,-297.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_26.setTransform(499.125,-297.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_27.setTransform(472.4,-297.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_28.setTransform(450.325,-297.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_29.setTransform(429.775,-297.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_30.setTransform(561.025,11.525);
	this.shape_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AlaFCIgDiLIAIg+IAOhAIBshUIAvgtIBLhVIAqhCIATgpIARg4IA9APIBBAbIBAAqICxCXIhIBMIi4EPIjcAtg");
	this.shape_31.setTransform(0.137,-0.0072);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ABD25D").s().p("AlcC2IAIg+IAOg/IBshVIAvgsIBLhWIAqhCIATgpIARg4IA9AQIBBAbIBAApICxCYIhIBLIi4EPIjcAtIjaAQg");
	this.shape_32.setTransform(0.025,0.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF1000").s().p("AlcC2IAIg+IAOg/IBshVIAvgsIBLhWIAqhCIATgpIARg4IA9AQIBBAbIBAApICxCYIhIBLIi4EPIjcAtIjaAQg");
	this.shape_33.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).to({state:[{t:this.shape_33},{t:this.shape_31}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-325.6,782.8,532.6);


(lib.huertas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape.setTransform(536.025,148.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_1.setTransform(516.325,148.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgCBtIAAiwIgsAAIAAgoIBdAAIAADYg");
	this.shape_2.setTransform(500.35,148.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgaA1IAOgyQgIgCgEgHQgFgGAAgKQAAgNAJgJQAIgIAMAAQANAAAJAIQAIAJAAANQAAAGgCAHIgGARIgSAtg");
	this.shape_3.setTransform(491.425,158.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgCBtIAAiwIgsAAIAAgoIBdAAIAADYg");
	this.shape_4.setTransform(480.1,148.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_5.setTransform(371.525,149.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_6.setTransform(351.825,148.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgeg0QgLARAAAjQAAAjALARQAMASASAAQAUAAALgSQALgRAAgjQAAgjgLgRQgLgRgUAAQgSAAgMARg");
	this.shape_7.setTransform(332.55,149.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgaA1IAOgyQgIgCgEgHQgFgHAAgJQAAgNAJgIQAIgJAMABQANgBAJAJQAIAIAAANQAAAGgCAHIgGARIgSAtg");
	this.shape_8.setTransform(318.025,159.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgCBtIAAiwIgsAAIAAgoIBdAAIAADYg");
	this.shape_9.setTransform(306.7,149.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgCBsIAAivIgsAAIAAgpIBdAAIAADYg");
	this.shape_10.setTransform(536.1,35.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgvBsIBMiuIhHAAIAAAiIgsAAIAAhMICtAAIAAAhIhQC3g");
	this.shape_11.setTransform(521.5,35.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgDBsIAAivIgrAAIAAgpIBdAAIAADYg");
	this.shape_12.setTransform(504.75,35.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgaA1IAOgyQgIgCgEgHQgFgGAAgKQAAgNAJgJQAIgHAMgBQANABAJAHQAIAJAAANQAAAGgCAHIgGARIgSAtg");
	this.shape_13.setTransform(495.825,45.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgDBsIAAivIgrAAIAAgpIBdAAIAADYg");
	this.shape_14.setTransform(484.5,35.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgCBsIAAivIgsAAIAAgpIBdAAIAADYg");
	this.shape_15.setTransform(368.6,36.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQALgRAAgjQAAgjgLgRQgLgRgUAAQgTAAgKARg");
	this.shape_16.setTransform(353.15,36.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_17.setTransform(333.125,36.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgaA0IAOgwQgIgDgEgGQgFgIAAgJQAAgNAJgJQAIgHAMAAQANAAAJAHQAIAJAAANQAAAHgCAFIgGASIgSAsg");
	this.shape_18.setTransform(320.375,46.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgDBsIAAivIgrAAIAAgpIBdAAIAADYg");
	this.shape_19.setTransform(309.05,36.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQAMgRAAgjQAAgjgMgRQgLgRgUAAQgTAAgKARg");
	this.shape_20.setTransform(544.1,-75.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgvBtIBNiwIhHAAIAAAjIgtAAIAAhLICtAAIAAAgIhRC4g");
	this.shape_21.setTransform(523.9,-75.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIATgnQANAKAQAFQAQAFARAAQASAAALgHQALgIgBgNQAAgOgLgHQgLgIgaAAIg4AAIALh4ICDAAIAAAoIhZAAIgEApIASAAQAtAAAWATQAVAQAAAfQABAUgLAQQgKARgTAJQgVALgdgBQgXAAgWgGg");
	this.shape_22.setTransform(504.9,-75.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgaA0IAOgxQgIgDgEgFQgFgIAAgJQAAgNAJgIQAIgJAMABQANgBAJAJQAIAIAAANQAAAGgCAGIgGASIgSAsg");
	this.shape_23.setTransform(491.925,-65.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIATgnQANAKAQAFQAQAFARAAQASAAALgHQALgIgBgNQAAgOgLgHQgLgIgaAAIg4AAIALh4ICDAAIAAAoIhZAAIgEApIASAAQAtAAAWATQAVAQAAAfQABAUgLAQQgKARgTAJQgVALgdgBQgXAAgWgGg");
	this.shape_24.setTransform(478.35,-75.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQALgRAAgjQAAgjgLgRQgLgRgUAAQgTAAgKARg");
	this.shape_25.setTransform(373.4,-77.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIAUgmQAMAJAQAFQAQAFARAAQASAAALgHQAKgIAAgNQABgOgLgIQgMgGgagBIg5AAIAMh4ICDAAIAAAoIhaAAIgCApIARAAQAtAAAVASQAXARAAAfQgBAUgJAQQgKARgVAJQgUAKgcAAQgXABgXgHg");
	this.shape_26.setTransform(353.4,-77.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_27.setTransform(334.875,-77.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgaA1IAOgyQgIgCgEgHQgFgGAAgKQAAgNAJgJQAIgIAMAAQANAAAJAIQAIAJAAANQAAAGgCAHIgGARIgSAtg");
	this.shape_28.setTransform(320.675,-67.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_29.setTransform(307.075,-77.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQAMgRAAgjQAAgjgMgRQgLgRgUAAQgTAAgKARg");
	this.shape_30.setTransform(464.9,-196.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_31.setTransform(444.875,-196.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_32.setTransform(426.625,-196.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgaA0IAOgwQgIgEgEgFQgFgIAAgJQAAgNAJgJQAIgHAMgBQANABAJAHQAIAJAAANQAAAHgCAFIgGASIgSAsg");
	this.shape_33.setTransform(413.875,-186.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIAUgmQAMAJAQAFQAQAFARAAQASAAALgIQAKgHAAgNQABgOgLgHQgMgIgaABIg5AAIAMh6ICDAAIAAApIhaAAIgCApIARAAQAtAAAVASQAXASAAAeQAAAUgKARQgKAQgVAKQgUAJgcABQgYgBgWgGg");
	this.shape_34.setTransform(400.3,-196.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AgzBpQgXgHgPgLIARgmQAOAKATAGQATAHAUAAQAUAAAKgHQALgGAAgLQAAgHgHgFQgGgGgJgDIgZgHQgZgFgPgGQgQgGgLgMQgMgNAAgWQAAgTALgPQAKgPAUgKQAVgIAdAAQAUAAAUAFQAUAEAPAKIgQAmQgdgRgfAAQgUAAgKAHQgKAGAAAMQAAALAMAFQALAGAXAFQAZAGAQAGQAQAGALALQALANAAAWQAAASgKAQQgKAPgVAJQgVAJgdAAQgZAAgZgHg");
	this.shape_35.setTransform(531.475,-337.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("ABFBsIgTguIhkAAIgTAuIgzAAIBgjYIAwAAIBiDYgAgiAYIBEAAIgihSg");
	this.shape_36.setTransform(509.75,-337.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AgYBsIAAiuIhGAAIAAgqIC9AAIAAAqIhGAAIAACug");
	this.shape_37.setTransform(488.275,-337.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AAqBsIgqg8IgBAAIgsAAIAAA8IgyAAIAAjYIBeAAQAcAAAVAKQAVAJAMASQALASAAAYQAAAZgMAQQgLARgWAKIAxBFgAgtAIIApAAQAWAAALgJQAMgKAAgSQAAgSgMgKQgLgJgWAAIgpAAg");
	this.shape_38.setTransform(468.075,-337.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AhTBsIAAjYICjAAIAAApIhxAAIAAAvIBkAAIAAAmIhkAAIAAAyIB1AAIAAAog");
	this.shape_39.setTransform(446.075,-337.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AhHBVQgagaAAgwIAAh5IAyAAIAAB3QAAA6AvAAQAYAAAMgOQAMgOAAgeIAAh3IAyAAIAAB5QAAAwgaAaQgaAaguAAQguAAgZgag");
	this.shape_40.setTransform(422.875,-337.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AAxBsIAAhZIhhAAIAABZIgzAAIAAjYIAzAAIAABWIBhAAIAAhWIAzAAIAADYg");
	this.shape_41.setTransform(398.125,-337.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AgzBpQgXgHgPgLIARgmQAOAKATAGQATAHAUAAQAUAAAKgHQALgGAAgLQAAgHgHgFQgGgGgJgDIgZgHQgZgFgPgGQgQgGgLgMQgMgNAAgWQAAgTALgPQAKgPAUgKQAVgIAdAAQAUAAAUAFQAUAEAPAKIgQAmQgdgRgfAAQgUAAgKAHQgKAGAAAMQAAALAMAFQALAGAXAFQAZAGAQAGQAQAGALALQALANAAAWQAAASgKAQQgKAPgVAJQgVAJgdAAQgZAAgZgHg");
	this.shape_42.setTransform(366.925,-337.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("ABFBsIgTguIhkAAIgUAuIgyAAIBgjYIAxAAIBhDYgAgiAYIBEAAIgihSg");
	this.shape_43.setTransform(345.2,-337.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AhPBsIAAjYIAzAAIAACwIBsAAIAAAog");
	this.shape_44.setTransform(325.125,-337.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_45.setTransform(430.425,-26.025);
	this.shape_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AjGBnIBIjgIAbAHIAZADIEHgKIAKA+IgOAMIgWAYIhRBtIgPARIhnADIiFARIgJAAg");
	this.shape_46.setTransform(0.0105,-0.0263);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#ABD25D").s().p("AiyB7IgUgVIBIjgIAbAHIAZAEIEHgLIAKA+IgOAMIgWAZIhRBtIgPAQIhnADIiFASg");
	this.shape_47.setTransform(0.025,0.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AjGBnIBIjgIA0AKIEHgKIAKA+IgOAMIgWAYIhRBtIgPARIhnADIiFARIgJAAg");
	this.shape_48.setTransform(0.0105,-0.014);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF1000").s().p("AiyB7IgUgVIBIjgIA0ALIEHgLIAKA+IgOAMIgWAZIhRBtIgPAQIhnADIiFASg");
	this.shape_49.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46}]}).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-362.8,634.1,533.2);


(lib.huaracha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape.setTransform(728.275,143.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_1.setTransform(714.925,143.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_2.setTransform(701.575,143.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg2IhlAAIAAgtICmAAIAAAjIg2A+QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_3.setTransform(560.675,142.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_4.setTransform(540.775,141.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_5.setTransform(523.225,142);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA1AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_6.setTransform(733,29.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgOAFgJQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_7.setTransform(710.425,29.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_8.setTransform(692.875,29.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAIAUABQAUgBAMgIQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_9.setTransform(561.475,28.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_10.setTransform(539.525,28.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_11.setTransform(522.125,28.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_12.setTransform(737.825,-82.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_13.setTransform(715.25,-82.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_14.setTransform(692.675,-83);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAXIg2AzIBlAAIAAAtg");
	this.shape_15.setTransform(563.975,-83.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_16.setTransform(543.925,-83.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAXIg2AzIBlAAIAAAtg");
	this.shape_17.setTransform(522.275,-83.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAglANgcQANgcAXgPQAXgOAdAAQAdAAAYAOQAWAPAOAcQANAcAAAlQAAAmgNAcQgOAcgWAPQgYAOgdAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMATQAMASAVAAQAWAAAMgSQAMgTAAgnQAAgmgMgTQgNgTgVAAQgVAAgMATg");
	this.shape_18.setTransform(654.7,-203.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_19.setTransform(635.175,-203.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgHg");
	this.shape_20.setTransform(619.425,-203.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_21.setTransform(750.45,-339.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AA2B3IAAhhIhrAAIAABhIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_22.setTransform(723.675,-339.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgyBrQgdgPgRgdQgRgbAAgkQAAgjARgcQARgbAdgRQAegPAkAAQAeAAAaALQAZAKAQAVIgjAgQgYgbgjAAQgWAAgRAJQgRAKgLARQgJASAAAVQAAAWAJASQALAQARALQARAJAWAAQAjAAAYgcIAjAgQgRAWgZAKQgZALgfAAQgjAAgegQg");
	this.shape_23.setTransform(697.8,-339.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_24.setTransform(672.1,-339.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AAuB3IgthCIgCAAIgwAAIAABCIg4AAIAAjtIBoAAQAeAAAYAKQAXALANAUQAMATAAAbQAAAagMASQgNATgYAKIA2BNgAgxAJIAsAAQAYAAANgKQANgLABgTQgBgVgNgLQgNgKgYAAIgsAAg");
	this.shape_25.setTransform(647.4,-339.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_26.setTransform(621.05,-339.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgQQAOgPAAggIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_27.setTransform(594.575,-339.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AA2B3IAAhhIhrAAIAABhIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_28.setTransform(567.475,-339.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_29.setTransform(531.15,-339.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_30.setTransform(509.075,-339.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_31.setTransform(635.275,-31.875);
	this.shape_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AAPAtIhuAtIhxApIh6AeIgKhIQgBgHAAgpQAAgcgLgYQAHgqAOgFQALgFAsgFQAcgHAwgLQAmgKAVgTQAbgIA5gPQA5gPAZgIQBzATBKAQQAgAGBFgCIAlgEIABAcIgUCkIiYAnIgpAHIhMACIgigEg");
	this.shape_32.setTransform(0.0159,0.0791);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ABD25D").s().p("AlUBaQgBgHAAgqQAAgcgLgYQAHgpAOgGQALgEAsgGIBMgRQAmgLAVgSIBUgXIBSgYQBzAUBKAQQAgAFBFgCIAlgDIABAcIgUCjIiYAoIgpAHIhMABIgigEIgPhAIhuAtIhxAoIh6Afg");
	this.shape_33.setTransform(0.025,0.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF1000").s().p("AlUBaQgBgHAAgqQAAgcgLgYQAHgpAOgGQALgEAsgGIBMgRQAmgLAVgSIBUgXIBSgYQBzAUBKAQQAgAFBFgCIAlgDIABAcIgUCjIiYAoIgpAHIhMABIgigEIgPhAIhuAtIhxAoIh6Afg");
	this.shape_34.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_34},{t:this.shape_32}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-367.6,853.3,534);


(lib.guerrero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag1BzQgYgHgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape.setTransform(520.925,422.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgJQAFgKAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_1.setTransform(500.625,422);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAglANgcQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAcAAAlQAAAmgOAcQgNAcgXAPQgWAOgeAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANATQANASAUABQAWgBAMgSQANgTAAgnQAAgmgNgTQgMgTgWAAQgUAAgNATg");
	this.shape_2.setTransform(344.25,421.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgHg");
	this.shape_3.setTransform(321.975,421.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgKQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_4.setTransform(522.975,309.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgGg");
	this.shape_5.setTransform(501.725,309.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgcAAgmQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAYAPQAWAOAOAcQANAbAAAmQAAAmgNAcQgOAcgWAOQgYAPgdAAQgdAAgXgPgAghg5QgMATAAAmQAAAnAMASQAMAUAVAAQAVAAANgUQAMgSAAgnQAAgmgMgTQgNgSgVAAQgVAAgMASg");
	this.shape_6.setTransform(345.9,309.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhnCOIBAAAIAAgrIAzAAIAAArIAoAAIAAAtIgoAAIAAAyg");
	this.shape_7.setTransform(323,309.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgKQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_8.setTransform(522.725,197.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_9.setTransform(501.725,197.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_10.setTransform(346.375,197.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_11.setTransform(324.725,197.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLARgWALQgWALggAAQgZAAgZgGg");
	this.shape_12.setTransform(442.675,77.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_13.setTransform(422.125,77.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_14.setTransform(404.725,77.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_15.setTransform(509.825,-26.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AAuB3IguhCIgBAAIgwAAIAABCIg4AAIAAjtIBoAAQAfAAAXAKQAXALANATQAMAUAAAaQAAAbgMASQgNATgYALIA2BMgAgxAJIAsAAQAZAAANgKQANgLgBgUQABgTgNgMQgNgKgZAAIgsAAg");
	this.shape_16.setTransform(483.8,-26.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_17.setTransform(459.675,-26.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AAuB3IguhCIgBAAIgwAAIAABCIg4AAIAAjtIBoAAQAfAAAXAKQAXALANATQAMAUAAAaQAAAbgMASQgNATgYALIA2BMgAgxAJIAsAAQAZAAANgKQANgLgBgUQABgTgNgMQgNgKgZAAIgsAAg");
	this.shape_18.setTransform(436,-26.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AAuB3IguhCIgBAAIgwAAIAABCIg4AAIAAjtIBoAAQAfAAAXAKQAXALANATQAMAUAAAaQAAAbgMASQgOATgXALIA2BMgAgxAJIAtAAQAXAAAOgKQANgLgBgUQABgTgNgMQgOgKgXAAIgtAAg");
	this.shape_19.setTransform(411,-26.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_20.setTransform(386.875,-26.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgPQAOgPAAgiIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_21.setTransform(361.425,-26.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgzBrQgdgQgSgcQgQgcAAgjQAAgjAQgcQARgcAfgQQAdgPAkAAQAgAAAZALQAaAKARAUIgjAhQgZgbglAAQgVAAgSAKQgRAJgKASQgLAQABAWQgBAWALARQAKASARAJQARAKAWAAQAYAAASgKIAAhEIAzAAIAABfQgTAPgaAHQgaAIgaAAQgkAAgdgQg");
	this.shape_22.setTransform(334.7,-26.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_23.setTransform(561.375,-58.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAQAQAbQARAaAAAjQAAAkgRAbQgQAbgeAOQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjgBIgyAAg");
	this.shape_24.setTransform(536.025,-58.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_25.setTransform(497.325,-58.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_26.setTransform(469.225,-58.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhnB3IAAgjICBidIh+AAIAAgtIDHAAIAAAjIiBCdICGAAIAAAtg");
	this.shape_27.setTransform(444.4,-58.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_28.setTransform(419.7,-58.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AAvB3IgvhCIgBAAIgwAAIAABCIg3AAIAAjtIBnAAQAfAAAWALQAYAKAMAUQANATAAAaQAAAbgNASQgNAUgXAJIA1BNgAgxAJIAtAAQAYAAANgKQAMgLAAgUQAAgUgMgKQgNgLgYAAIgtAAg");
	this.shape_29.setTransform(395,-58.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgQQAOgPAAghIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_30.setTransform(368.225,-58.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAQAQAbQARAaAAAjQAAAkgRAbQgQAbgeAOQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjgBIgyAAg");
	this.shape_31.setTransform(341.525,-58.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_32.setTransform(308.125,-58.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_33.setTransform(285.825,-58.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_34.setTransform(421.025,251.525);
	this.shape_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AiTCdIhIhlIAchoIAPgfIAcgpIDXgcIA0gBIAJgCIAEgCIADgCIAEgBIATgMIAPAZIAVAwIAHAYIATBqIgiAJIgMAvIgMAYIgjA1IhgADg");
	this.shape_35.setTransform(0.0382,-0.0989);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ABD25D").s().p("AiTCcIhIhlIAchoIAPgfIAcgpIDXgcIA0gBIAJgCIAEgBIADgDIAEgBIATgMIAPAaIAVAvIAHAYIATBrIgiAJIgMAvIgMAXIgjA1IhgADg");
	this.shape_36.setTransform(0.025,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF1000").s().p("AiTCcIhIhlIAchoIAPgfIAcgpIDXgcIA0gBIAJgCIAEgBIADgDIAEgBIATgMIAPAaIAVAvIAHAYIATBrIgiAJIgMAvIgMAXIgjA1IhgADg");
	this.shape_37.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).to({state:[{t:this.shape_37},{t:this.shape_35}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-86.6,628.9,531.9);


(lib.FichaMapitaai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("AgpgHIASgKQAJAQAOAAQANAAAJgQIATAKQgGALgLAIQgLAHgNAAQgOAAgLgHQgLgIgFgLg");
	this.shape.setTransform(117.7237,33.6665);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgYALQgMgIgFgLIATgKQAIAQAOAAQAOAAAJgQIASAKQgFAMgLAHQgLAIgOAAQgNAAgLgIg");
	this.shape_1.setTransform(117.65,33.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.5).p("AD4j+QAUAIAAAWQAAAKgFAIQgGAIgKADQgDgigdgSQAGgGAJgCQAJgCAJADgAE3FBIAUAAQAAgBABgwQABg2AAgjQgBgagRgWQgRgWgagHQgJgCgYgFQgGgBAAgFQgBgEAAgCQgBgDADgDQAMgMAGgLQAGgMAGgGQAYgZACgfQACghgVgbQgCgCgBgHQgBgngjgTIgEgCQALgRABgDQAEgGAGgCQARgEALgNQALgOABgQQABgRgJgOQgJgPgQgHQgQgHgQAEQgRAEgLAMQgEAFgHgBQgTgBgRAKQgRAKgJARQgIASACATQADAUAOAOIADAEQgVAIgMAUIgSgTQgBgCAAgCQACgygsgTQAUgbAAgYQAAgYgVgTQgSgRgYAAQgYAAgSAQQgUAQgCAZQgEAdAXAYQgrAVACAwQAAADgBABIgSATIgPgQQgDgCgPgKQAUgVgBgbQgBgZgQgRQgRgSgYgCQgZgCgUAPQgTAOgFAYQgHAhAaAbQgaALgMAaQgBADgDABQgVAJAAAXIAAAtQgBAqAfAeQADADACAEQAHASANALQADADAAADQAAACgBAEQgBAGgGAAIgVAEQgiAHgTAXQgTAXAAAiIAACDIAWAAIgBgFIAAiBQAAgUAMgRQALgQATgGIADAGIA8BvQACAFAAACIABBFIAWAAIAAhLQAGAGADACQACABAJADIAAA/IAWAAIAAhAIAYABQABAAACADIAMAgQAEAHAAAVIgrAAAC2jrQAXAAAOAVIhJAAQANgUAXgBgAA/ibIgcgLIAIgTQAIADAGAJQAGAJAAAJgACLh5IAJAUIgaARQgFgJAGgLQAFgMALgFgADhjAQABARgNANQgMAMgRABQgSAAgNgMQgNgNAAgSgAChh/IAqAAQAAAJgGAGQgGAGgIAAQgJAAgGgGQgGgGgBgJgAD0hiIgYgIIAFgQQAOAJAFAPgAECAMIAAgGQgBgKgIgJQgIgIgMgCIgTgDQgNgBgGgGQgHgGgCgNIgVAAIACAPQgZAKgIAZIgBgBIgBgzQAAgDACgCQATgZAdgBQAdAAAKACQAgAFAOAeQANAegSAegADrApQgDAQgNAKQgOAKgQgCQgQgCgLgMQgLgMgBgQQAAgLAAgLQABgKAFgHQAGgIAJgDQAFgBABABQAIAHALADQAHACAPACQANACACACQADADAAAMIAAAGQAAANgBAGgAhrBYIAAiBQAAguAggfQAhggAtABQApABAeAcQAeAdACApQACAcgBAoQAAAYAAAuQgngHgKgDQgLgCgDgLQAVgTACgDQASgUABgdIAAg3IgdgGQgbgHgQgVQgDgEAAgGIgBgWIgUAAIAAAXQAAAFgDAEQgTAXgeAGIgXAFIAAAlQAAAQABAKQAEAjAgAWQAIAGgGAFQgHAIgGABgAA/ACQgEAWgRAPQgRAOgXABQgXAAgTgPQgTgOgDgXQgBgIAAgOQABgYAAAAQAlgGAZgcIAGAHQAYAVAcAFQAHABgBAGIAAAVQAAAMgBAHgAAKFBIABhYQAAgGACgEIA9hyQADgGAHACQAgAGAVAZQAWAZACAhIAAApIgrAAQACghgOgiIgTAHQAHAZABAKQAEAYgKAcIgBADQgJAVgCAHQgBAFgCAXIAXAAQgBgTAEgJQABgDALgdQADgDACAAIAWgBIAABAIgqAAACBAvIANAYQAFAHAEADQAEACgBAHQAAAGgEACQgCABgGABQgLACgBgBQgCgBABgKgACzBqQgFgDAAgBQgBgBACgGIAkAAQAEAHgIAEQgLAHgDAAQgDAAgLgHgACrCAIgJAEIgJgLQAFgCADABQADABAHAHgADJCRQgEAOgCABQAAABgTgBIgDgIQAQgOAMAHgADkCeIgJASQgEgFACgGQADgKAAAAgAD3B7IgIAQIgYgLQAJgIAEAAQAEgBAPAEgADMFBIAAgDIAAhBQAAgEACgEIA8hwQADgGAHADQAiASABAiQAAAQAAB7IgVAAIAAh1IgWAAIAAB1IAWAAAAqj/QABARgNAMQgMAMgSABQgRAAgMgNQgNgMAAgRgAAAkrQAWAAAOAVIhIAAQANgUAXgBgAiLjAQAAASgNANQgNAMgRAAQgSAAgMgNQgNgMAAgSgAh4hYIgagPIAHgRQAIACAHALQAHAMgDAHgAAVjAQAAAJgGAGQgGAGgJAAQgIABgGgGQgGgGAAgKgAgqi5IAIATIgcALQgBgHAGgJQAFgJAKgFgAi2jrQAXAAAOAVIhKAAQAOgVAXAAgAjhh7IAFAQIgVAAgAihh/QAAAIgGAHQgGAGgIAAQgJAAgGgGQgGgGgBgJgAkCAMQgKgQAAgQIAAg0QAAgNANAAIBVAAQAYABAQATQADADAAADQABAigCAbQgJgcgZgLIACgPIgVAAQgBACgCAGQgEAOgOADIgXADQgQADgIAIQgHAJgCAQgAjsAhIAAgSQAAgLADgDQADgCALgCQARgCABgBQAPgEAFgEQAHgGAIAFQAOAJACANQABAXgCALQgDAQgNAKQgNAJgQgBQgRgBgLgNQgLgMgBgQgAjPBqQgEgDgBgBQAAgBACgGIAjAAQAEAHgHAEQgLAHgEAAQgDAAgLgHgAjaCwIgKgRIAIgFQAAAEADAHQACAGgDAFgAjXCAIgXALIgJgQQAMgDAFAAQAJAAAGAIgAisCWQgCAHgBABQgCADgFAAQgLAAgCgCQgDgCgDgMQAHgGAJAFQALAGACAAgAhKFBIAAgCQACgTgMgZQgWgvATgxIABgEIgUgHQgNAiACAiIgrAAQgBgkACgLQACgaANgSQAWggAngIQAGgCADAGIA+BzQACAEAAACIAABbIAUAAAiaBTQASgNAGgWIACAAIAAAyQAAABgCABQgCACgBgBQgDAAgNgCQgCgBgDgGQgCgHACgCgAiYB4IgJAMIgKgFQADgBAFgFQAFgDAGACgAgXBKIAvAAQAIAUAXAGIgUAlQgBACgEAAIg7AAQgEAAgCgCIgTglQANgFAFgEQAFgFAIgMgAgWChIAsAAIgWAqgAhgFBIAWAAAgKFBIhAAAAjMDKQgBgCACgGQAFgKADgBQADgBALABQgBARgCAHQgCAHgHAJQgIgOgDgHgAkMFBIAAh1IgVAAIAAB1IgVAAAkhFBIAVAAAjLFBIhBAAAihFBIgUAAADCDfQgNgOABgbIAMAAQADABACADQAKAOgKANQgDAGgCAEgAChFBIAAg+IAUgLQABACABAbQABAdgCAPgAC2FBIAWAAACLFBIAWAAAEMFBIhAAAABKFBIhAAA");
	this.shape_2.setTransform(117.6583,32.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AE3FBIAAiLQgBgigigSQgHgDgDAGIg8BwQgCAEAAAEIAABBIAAADIgWAAQACgPgBgdQgBgbgBgCIgUALIAAA+IgWAAIAAhAIgWABQgCAAgDADIgMAgQgEAJABATIgXAAIADgcIALgcIABgDQAKgcgEgYQgBgKgHgZIATgHQAOAigCAhIArAAIAAgpQgCghgWgZQgVgZgggGQgHgCgDAGIg9ByQgCAEAAAGIgBBYIgUAAIAAhbIgCgGIg+hzQgDgGgGACQgnAIgWAgQgNASgCAaQgCALABAkIArAAQgCgiANgiIAUAHIgBAEQgTAxAWAvQAMAZgCATIAAACIgWAAQAAgVgEgHIgMggIgDgDIgYgBIAABAIgWAAIAAg/IgLgEIgJgIIAABLIgWAAIgBhFIgCgHIg8hvIgDgGQgTAGgLAQQgMARAAAUIAACBIABAFIgWAAIAAiDQAAgiATgXQATgXAigHIAVgEQAGAAABgGIABgGQAAgDgDgDQgNgLgHgSQgCgEgDgDQgfgeABgqIAAgtQAAgXAVgJQADgBABgDQAMgaAagLQgagbAHghQAFgYATgOQAUgPAZACQAYACARASQAQARABAZQABAbgUAVIASAMIAPAQIASgTIABgEQgCgwArgVQgXgYAEgdQACgZAUgQQASgQAYAAQAYAAASARQAVATAAAYQAAAYgUAbQAsATgCAyQAAAAAAABQAAABAAAAQAAAAABABQAAAAAAABIASATQAMgUAVgIIgDgEQgOgOgDgUQgCgTAIgSQAJgRARgKQARgKATABQAHABAEgFQALgMARgEQAQgEAQAHQAQAHAJAPQAJAOgBARQgBAQgLAOQgLANgRAEQgGACgEAGIgMAUIAEACQAjATABAnQABAHACACQAVAbgCAhQgCAfgYAZQgGAGgGAMQgGALgMAMQgDADABADIABAGQAAAFAGABIAhAHQAaAHARAWQARAWABAaIgBBZIgBAxgAjDC3QgDABgFAKQgCAGABACIALAVQAHgJACgHQACgHABgRIgHgBIgHABgADCDfIAFgKQAKgNgKgOQgCgDgDgBIgMAAQgBAbANAOgAAADLIAWgqIgsAAgADZClQgCAGAEAFIAJgSIgIgDIgDAKgAjkCfIAKARQADgFgCgGQgDgHAAgEgAjJCRQADAMADACQACACALAAQAFAAACgDIADgIQgCAAgLgGQgEgCgDAAQgFAAgEADgACtCYIADAIIATAAQACgBAEgOQgEgDgEAAQgJAAgLAKgADkB4QgEAAgJAIIAYALIAIgQQgNgDgEAAIgCAAgAgkBbQgFAEgNAFIATAlQACACAEAAIA7AAQAEAAABgCIAUglQgXgGgIgUIgvAAQgIAMgFAFgAj3B7IAJAQIAXgLQgGgIgJAAQgFAAgMADgACZB5IAJALIAJgEQgHgHgDgBIgDAAIgFABgAijB5QgFAFgDABIAKAFIAJgMIgEgBQgEAAgDACgACuBmQAAABAFADQALAHADAAQADAAALgHQAIgEgEgHIgkAAIgBAHgAjUBmQABABAEADQALAHADAAQAEAAALgHQAHgEgEgHIgjAAIgCAHgACBBaQgBAKACABIAMgBIAIgCQAEgCAAgGQABgHgEgCQgEgDgFgHIgNgYgAiaBTQgCACACAHQADAGACABIAQACQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBIACgCIAAgyIgCAAQgGAWgSANgAAKh/IABAWQAAAGADAEQAQAVAbAHIAdAGIAAA3QgBAdgSAUIgXAWQADALALACIAxAKIAAhGQABgogCgcQgCgpgegdQgegcgpgBQgtgBghAgQggAfAAAuIAACBIAwgJQAGgBAHgIQAGgFgIgGQgggWgEgjIgBgaIAAglIAXgFQAegGATgXQADgEAAgFIAAgXgACrgRQgJADgGAIQgFAHgBAKIAAAWQABAQALAMQALAMAQACQAQACAOgKQANgKADgQQABgGAAgNIAAgGQAAgMgDgDQgCgCgNgCQgPgCgHgCQgLgDgIgHIgCAAIgEAAgAi1gOQgFAEgPAEIgSADQgLACgDACQgDADAAALIAAASQABAQALAMQALANARABQAQABANgJQANgKADgQQACgLgBgXQgCgNgOgJQgDgCgEAAQgEAAgEADgAg+gsIgBAYQAAAOABAIQADAXATAOQATAPAXAAQAXgBARgOQARgPAEgWIABgTIAAgVQABgGgHgBQgcgFgYgVIgGgHQgZAcglAGgAkMhIIAAA0QAAAQAKAQQACgQAHgJQAIgIAQgDIAXgDQAOgDAEgOIADgIIAVAAIgCAPQAZALAJAcQACgbgBgiQAAgDgDgDQgQgTgYgBIhVAAQgNAAAAANgAC2g0QACANAHAGQAGAGANABIATADQAMACAIAIQAIAJABAKIAAAGQASgegNgeQgOgegggFQgKgCgdAAQgdABgTAZQgCACAAADIABAzIABABQAIgZAZgKIgCgPgAB7hoQgGALAFAJIAagRIgJgUQgLAFgFAMgAiShnIAaAPQADgHgHgMQgHgLgIgCgADchqIAYAIQgFgPgOgJgAjEhwQAGAGAJAAQAIAAAGgGQAGgHAAgIIgqAAQABAJAGAGgACohwQAGAGAJAAQAIAAAGgGQAGgGAAgJIgqAAQABAJAGAGgAjxhrIAVAAIgFgQgACZihQANAMASAAQARgBAMgMQANgNgBgRIhVAAQAAASANANgAjUiiQAMANASAAQARAAANgMQANgNAAgSIhWAAQAAASANAMgAAjimIAcALQAAgJgGgJQgGgJgIgDgAg5irQgGAJABAHIAcgLIgIgTQgKAFgFAJgAgOiwQAGAGAIgBQAJAAAGgGQAGgGAAgJIgpAAQAAAKAGAGgADmj/QgJACgGAGQAdASADAiQAKgDAGgIQAFgIAAgKQAAgWgUgIQgGgCgGAAIgGABgAgdjiQAMANARAAQASgBAMgMQANgMgBgRIhUAAQAAARANAMgACSjWIBJAAQgOgVgXAAQgXABgNAUgAjbjWIBKAAQgOgVgXAAQgXAAgOAVgAgkkWIBIAAQgOgVgWAAQgXABgNAUgAEMFBIAAh1IAWAAIAAB1gAkhFBIAAh1IAVAAIAAB1g");
	this.shape_3.setTransform(117.6583,32.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFCC00").ss(1,1,1).p("AAcAZQABADAAACQAAAFgEADQgCABgDAAQgFAAgCgEIgng7QgCgCAAgDQAAgGAEgCQADgCACAAQAFAAADAFIAnA7IAHgFIgng7QgFgJgKAAQgFAAgFADQgIAGAAAKQAAAFADAFIAnA7QAGAJAJAAQAGAAAEgDQAIgGAAgKQAAgFgDgF");
	this.shape_4.setTransform(189.175,240.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AAFAoIgng7QgDgFAAgFQAAgKAIgGQAFgDAFAAQAKAAAFAJIAnA7QADAFAAAFQAAAKgIAGQgEADgGAAQgJAAgGgJgAgYglQgEACAAAGQAAADACACIAnA7QACAEAFAAQADAAACgBQAEgDAAgFIgBgFIgng7QgDgFgFAAIgFACg");
	this.shape_5.setTransform(189.175,240.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFCC00").ss(1,1,1).p("AgiAUQgDAFAAAFQAAAKAIAGQAEADAGAAQAKAAAFgJIAng7QADgFAAgFQAAgKgIgGQgFgDgFAAQgKAAgFAJIgnA7IAHAFIAng7QADgFAFAAQADAAACACQAEADAAAFQAAADgBACIgoA7QgCAEgFAAQgDAAgCgBQgEgDAAgFQAAgCABgD");
	this.shape_6.setTransform(217.075,240.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AgdAuQgIgGAAgKQAAgFADgFIAng7QAFgJAKAAQAFAAAFADQAIAGAAAKQAAAFgDAFIgnA7QgFAJgKAAQgGAAgEgDgAAMgiIgnA7IgBAFQAAAFAEADIAFABQAFAAACgEIAog7QABgCAAgDQAAgFgEgDQgCgCgDAAQgFAAgDAFg");
	this.shape_7.setTransform(217.075,240.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFCC00").ss(1,1,1).p("AgjgIQgDgBgBgCQgBgCAAgDIABgEQACgFAGAAIAEABIA/AhQAFADAAAFIgBAEQgCADgBABQgCABgDAAIgEgBIg/ghIgFAIIBAAhQADACAFAAQAFAAAEgCQAFgDACgEQACgEAAgFQAAgLgJgFIhAghQgDgCgFAAQgLAAgFAJQgCAEAAAFQAAAEACAFQADAFAEAC");
	this.shape_8.setTransform(226.125,274.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AAYAhIhAghQgEgCgDgFQgCgFAAgEQAAgFACgEQAFgJALAAQAFAAADACIBAAhQAJAFAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgFAAgDgCgAgngUIgBAEQAAADABACQAAAAABABQAAAAABABQAAAAABAAQAAABABAAIA/AhIAEABQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAIADgEIABgEQAAgFgFgDIg/ghIgEgBQgGAAgCAFg");
	this.shape_9.setTransform(226.125,274.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFCC00").ss(1,1,1).p("AApAAQAEgCADgFQACgDAAgGQAAgFgCgEQgEgJgMAAQgEAAgEACIg/AhQgKAFAAALQAAADACAGQADAEAEADQAFACAEAAQAFAAAEgCIA/ghIgEgIIhAAhIgEABQgCAAgDgBQgCgBgBgDIgBgEQAAgFAFgDIA/ghIAEgBQAGAAACAFQABABAAADIgBAFQgCADgBAA");
	this.shape_10.setTransform(179.325,274.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("AgoAhQgEgDgDgEIgCgJQAAgLAKgFIA/ghQAEgCAEAAQAMAAAEAJQACAEAAAFQAAAGgCADQgDAFgEACIg/AhQgEACgFAAQgEAAgFgCgAAcgYIg/AhQgFADAAAFIABAEQAAABABABQAAAAABABQAAAAAAAAQABABAAAAIAFABIAEgBIBAghIADgDIABgFIgBgEQgCgFgGAAg");
	this.shape_11.setTransform(179.325,274.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFCC00").ss(1,1,1).p("AgoABQgJAFAAALQAAAFACAEQACAEAFADQADACAGAAQAFAAADgCIBAghQAJgFAAgLQAAgFgCgDQgCgEgFgEQgEgCgFAAQgEAAgEACIhAAhIAFAIIA/ghQABgBADAAQADAAACABIADAEIABAEIgBAFQgBABgDACIg/AhQgBABgDAAIgFgBIgDgDIAAgBIgBgEQAAgGAFgC");
	this.shape_12.setTransform(226.125,250.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("AgoAhQgFgDgCgEQgCgEAAgFQAAgLAJgFIBAghQAEgCAEAAQAFAAAEACQAFAEACAEQACADAAAFQAAALgJAFIhAAhQgDACgFAAQgGAAgDgCgAAcgYIg/AhQgFACAAAGIABAEIAAABIADADIAFABIAEgBIA/ghIAEgDIABgFIgBgEIgDgEIgFgBIgEABg");
	this.shape_13.setTransform(226.125,250.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFCC00").ss(1,1,1).p("AApABIg/ghQgFgCgEAAQgFAAgEADQgEACgDAFQgCAFAAADQAAALAKAFIA/AhQAEACAEAAQAMAAAEgJQACgEAAgFQAAgLgJgFgAAlAJQAEADAAAFQAAADgBACIAAgBQgCAFgGAAQgDAAgBgBIg/ghQgFgCAAgGIABgEIAAAAQABgBACgDQACgBADAAQADAAABABIBAAhIAEgI");
	this.shape_14.setTransform(179.325,250.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("AAYAhIg/ghQgKgFAAgLQAAgDACgFQADgFAEgCQAEgDAFAAQAEAAAFACIA/AhQAJAFAAALQAAAFgCAEQgEAJgMAAQgEAAgEgCgAgogQQAAAGAFACIA/AhIAEABQAGAAACgFIAAABIABgFQAAgFgEgDIhAghIgEgBIgFABIgDAEIAAAAg");
	this.shape_15.setTransform(179.325,250.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFCC00").ss(1,1,1).p("AAlgRIhIAAQgIAAgFAFQgFAFAAAHQAAAHAFAGQAFAFAIAAIBIAAQAHAAAGgFQAFgGAAgHQAAgHgFgFQgGgFgHAAgAAlgIQAEAAACACQADAEAAACQAAAEgDACQgEADgCAAIhIAAQgEAAgCgDQgDgCAAgEQAAgDADgDQACgCAEAAIBIAAIAAgJ");
	this.shape_16.setTransform(177.4,262.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("AgjASQgIAAgFgFQgGgGABgHQgBgHAGgFQAFgFAIAAIBIAAQAHAAAFAFQAFAFABAHQgBAHgFAGQgFAFgHAAgAgpgGQgDADAAADQAAAEADACQACADAEAAIBIAAQACAAAEgDQADgCAAgEQAAgCgDgEQgCgCgEAAIhIAAQgEAAgCACg");
	this.shape_17.setTransform(177.4,262.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFCC00").ss(1,1,1).p("AAkgIIAAgJIhHAAQgIAAgFAFQgFAFAAAHQAAAHAFAGQAFAFAIAAIBHAAQAIAAAFgFQAGgGAAgHQAAgHgGgFQgFgFgIAAAAkgIQAEAAADACQADADAAADQAAAEgDACQgDADgEAAIhHAAQgEAAgDgDQgCgCAAgEQAAgCACgEQADgCAEAAg");
	this.shape_18.setTransform(228.2,262.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("AgjASQgIAAgFgFQgFgGAAgHQAAgHAFgFQAFgFAIAAIBHAAQAIAAAFAFQAFAFAAAHQAAAHgFAGQgFAFgIAAgAgqgGQgCAEgBACQABAEACACQADADAEAAIBHAAQAEAAADgDQACgCAAgEQAAgDgCgDQgDgCgEAAIhHAAQgEAAgDACg");
	this.shape_19.setTransform(228.2,262.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFCC00").ss(1,1,1).p("AAJAkQAAAFgDACQgCACgEAAQgDAAgCgCQgDgCAAgFIAAhIQAAgDADgDQACgDADAAQAEAAACADQADADAAADIAABIIAJAAIAAhIQAAgHgFgFQgFgGgIAAQgGAAgGAGQgFAFAAAHIAABIQAAAIAFAFQAGAGAGAAQAIAAAFgGQAFgFAAgI");
	this.shape_20.setTransform(203.125,235.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC00").s().p("AgMAxQgFgFAAgIIAAhIQAAgHAFgFQAGgGAGAAQAIAAAFAGQAFAFAAAHIAABIQAAAIgFAFQgFAGgIAAQgGAAgGgGgAgFgqQgDADAAADIAABIQAAAFADACQACACADAAQAEAAACgCQADgCAAgFIAAhIQAAgDgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_21.setTransform(203.125,235.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFCC00").ss(1,1,1).p("AgsgJIgDADQAUAUAbAAQAcAAAUgUQACgDgBgCQgBgDgDAAIhZAAQgDAAgBADQgBACACADAgsgJIAAAEIAMAAQgFgDgDgEgAAhgFIAMAAIAAgEIgEgDQgDAEgFADQgNAKgUAAQgSAAgOgKg");
	this.shape_22.setTransform(203.125,295.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC00").s().p("AgvgGQgCgDABgCQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIBZAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQABACgCADQgUAUgcABQgbgBgUgUgAAAAGQAUgBAOgJIhDAAQAPAJASABg");
	this.shape_23.setTransform(203.125,295.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFCC00").ss(1,1,1).p("ABKAAQAAAIgFADQgFAFgGAAIhzAAQgGAAgFgFQgFgDAAgIQAAgGAFgFQAFgEAGAAIBzAAQAGAAAFAEQAFAFAAAGIAJAAQAAgKgHgHQgIgHgKAAIhzAAQgKAAgHAHQgIAHAAAKQAAAKAIAIQAHAHAKAAIBzAAQAKAAAIgHQAHgIAAgK");
	this.shape_24.setTransform(203.125,292.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC00").s().p("Ag5AZQgKAAgHgIQgIgHAAgKQAAgJAIgIQAHgHAKAAIBzAAQAKAAAIAHQAHAIAAAJQAAAKgHAHQgIAIgKAAgAhEgLQgFAFAAAGQAAAHAFAEQAFAFAGAAIBzAAQAGAAAFgFQAFgEAAgHQAAgGgFgFQgFgEgGAAIhzAAQgGAAgFAEg");
	this.shape_25.setTransform(203.125,292.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFCC00").ss(1,1,1).p("ABYAAQAAAGgEAGQgGAEgGAAIiPAAQgHAAgEgEQgFgFAAgHQAAgFAFgFQAEgFAHAAICPAAQAGAAAGAFQAEAFAAAFIAJAAQAAgKgHgHQgHgHgLAAIiPAAQgKAAgIAHQgHAHAAAKQAAALAHAHQAIAHAKAAICPAAQALAAAHgHQAHgHAAgL");
	this.shape_26.setTransform(203.125,288.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("AhHAZQgKAAgIgHQgHgHAAgLQAAgKAHgGQAIgIAKAAICPAAQALAAAHAIQAHAGAAAKQAAALgHAHQgHAHgLAAgAhSgLQgFAGAAAFQAAAHAFAFQAEAEAHAAICPAAQAGAAAGgEQAEgGAAgGQAAgFgEgGQgGgEgGAAIiPAAQgHAAgEAEg");
	this.shape_27.setTransform(203.125,288.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFCC00").ss(1,1,1).p("ABmAAQAAAIgFAFQgGAGgIAAIilAAQgIAAgGgGQgFgFAAgIQAAgHAFgGQAGgFAIAAIClAAQAIAAAGAFQAFAGAAAHIAJAAQAAgLgIgIQgIgIgMAAIilAAQgMAAgIAIQgIAIAAALQAAALAIAJQAIAIAMAAIClAAQAMAAAIgIQAIgJAAgL");
	this.shape_28.setTransform(203.125,283.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC00").s().p("AhSAcQgMAAgIgIQgIgJAAgLQAAgLAIgIQAIgIAMAAIClAAQAMAAAIAIQAIAIAAALQAAALgIAJQgIAIgMAAgAhggNQgFAGAAAHQAAAIAFAFQAGAGAIAAIClAAQAIAAAGgGQAFgFAAgIQAAgHgFgGQgGgFgIAAIilAAQgIAAgGAFg");
	this.shape_29.setTransform(203.125,283.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFCC00").ss(1,1,1).p("AAAi1IAAgEAh9BUQgkgtAAg4QAAhEAvgvQAwgwBCgBQBDABAwAwQAvAvAABEQAAA4gkAtQAAABAAAAQgBACABACQAAACACAAIACgDIADACQABgBAAAAQABgBgBgCQAAgCgCgBIgCAEIgDgDIgBABQgDADgKANQgPAVgSAaQgFAGgBAJQgCAHAAAJIABACIAAAFIAEAAIAAgFIgEAAIiQAAIAAgCQAAgJgCgHQgBgJgFgGQgRgZgQgWIgNgQIAAgBIgEAEIACADQACAAABgCQAAgDgBgBACrgRQAAhHgygyQgygzhHgBQhGABgyAzQgyAyAABHQAAA7AlAvQAAABABAAIAAABQAGAIAIAKQAQAUAQAYQADAEABAHQACAHAAAIIgBAHQAAADACAAIADACICZAAQADAAAAgCQACAAAAgDIgBgHQAAgIACgHQABgHADgEIAug+IABgBQAAgBAAAAQAlguAAg8IgJAAAhHC1IgFAAIAAAFIAFAAgAiEBaIADgDIgBgEIgBAAQgCABAAACQgBACABABACCBXIAAAB");
	this.shape_30.setTransform(203.125,264);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC00").s().p("AhMC+IgDgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgHQAAgIgCgHQgBgHgDgEQgQgXgQgVIgOgSIAAgBIgBgBQglgvAAg7QAAhHAygzQAygyBGAAQBHAAAyAyQAyAzAABHQAAA8glAuIAAABIgBABIguA+QgDAEgBAHQgCAHAAAIIABAHQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAgABJC1IgBgCQAAgJACgHQABgJAFgGIAhgvIANgQIAAgBQAkgsAAg5QAAhDgvgxQgwgvhDAAQhCAAgwAvQgvAxAABDQAAA5AkAsIAAABIANAQQAQAWARAZQAFAGABAJQACAHAAAJIAAACICQAAg");
	this.shape_31.setTransform(203.125,264);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFCC00").ss(1,1,1).p("AAAi1IAAgEAh9BUQgkgtAAg4QAAhEAvgvQAwgwBCgBQBDABAwAwQAvAvAABEQAAA4gkAtQAAABAAAAQgBACABACQAAACACAAIACgDIADACQABgBAAAAQABgBgBgCQAAgCgCgBIgCAEIgDgDIgBABQgDADgKANQgPAVgSAaQgFAGgBAJQgCAHAAAJIABACIAAAFIAEAAIAAgFIgEAAIiQAAIAAgCQAAgJgCgHQgBgJgFgGQgRgZgQgWIgNgQIAAgBIgEAEIACADQACAAABgCQAAgDgBgBACrgRQAAhHgygyQgygzhHgBQhGABgyAzQgyAyAABHQAAA7AlAvQAAABABAAIAAABQAGAIAIAKQAQAUAQAYQADAEABAHQACAHAAAIIgBAHQAAADACAAIADACICZAAQADAAAAgCQACAAAAgDIgBgHQAAgIACgHQABgHADgEIAug+IABgBQAAgBAAAAQAlguAAg8IgJAAAhHC1IgFAAIAAAFIAFAAgAiEBaIADgDIgBgEIgBAAQgCABAAACQgBACABABACCBXIAAAB");
	this.shape_32.setTransform(203.125,264);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC00").s().p("AhMC+IgDgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgHQAAgIgCgHQgBgHgDgEQgQgXgQgVIgOgSIAAgBIgBgBQglgvAAg7QAAhHAygzQAygyBGAAQBHAAAyAyQAyAzAABHQAAA8glAuIAAABIgBABIguA+QgDAEgBAHQgCAHAAAIIABAHQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAgABJC1IgBgCQAAgJACgHQABgJAFgGIAhgvIANgQIAAgBQAkgsAAg5QAAhDgvgxQgwgvhDAAQhCAAgwAvQgvAxAABDQAAA5AkAsIAAABIANAQQAQAWARAZQAFAGABAJQACAHAAAJIAAACICQAAg");
	this.shape_33.setTransform(203.125,264);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#3FA9F5").p("AAAg6IABgDIABgBIgCgCIgCACIABABQABABAAACQAOATAIANIAOAaIAEALIACAJIAGAAQAAgDgCgIQgEgKgHgNQgIgQgNgTQgMgQAAgBIgCgBIgCABIgWAiQgJAOgHAOQgEAIgBAFQgCAFAAAGQAAAUAOAOQAOAOATAAQAUAAAOgOQAOgOAAgUAAqAUQAAARgNANQgMAMgRAAQgRAAgMgMQgMgMAAgSIACgKQABgFAJgRIAdgu");
	this.shape_34.setTransform(11.675,398.3057);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3FA9F5").s().p("AghA2QgOgOAAgUQAAgGACgFIAFgNQAHgOAJgOIAWgiIACgBIACABIAMARQANATAIAQQAHANAEAKIACALQAAAUgOAOQgOAOgUAAQgTAAgOgOgAgdgMIgKAWIgCAKQAAASAMAMQAMAMARAAQARAAAMgMQANgNAAgRIgCgJIgEgLIgOgaIgWghg");
	this.shape_35.setTransform(11.675,398.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#3FA9F5").p("AAtAWQAAATgNANQgOANgSAAQgSAAgNgNQgNgNAAgTQAAgPAXgkIAVghIAWAhQAXAkAAAPg");
	this.shape_36.setTransform(11.675,398.1278);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgfA0QgNgNAAgTQAAgPAXgkIAVghIAWAhQAXAkAAAPQAAATgNANQgOANgSAAQgSAAgNgNg");
	this.shape_37.setTransform(11.675,398.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#3FA9F5").p("ABKAAQAAADgDADQgCADgEAAIiBAAQgEAAgCgDQgDgDAAgDQAAgDADgCQACgDAEAAICBAAQAEAAACADQADACAAADIAGAAQAAgFgFgFQgEgEgGAAIiBAAQgGAAgEAEQgFAFAAAFQAAAGAFAEQAEAFAGAAICBAAQAGAAAEgFQAFgEAAgG");
	this.shape_38.setTransform(40.75,354.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3FA9F5").s().p("AhAAPQgGAAgEgEQgFgFAAgGQAAgFAFgEQAEgFAGAAICAAAQAHAAAEAFQAEAEAAAFQAAAGgEAFQgEAEgHAAgAhGgFQgCADgBACQABADACADQACADAEAAICAAAQAEAAADgDQACgDAAgDQAAgCgCgDQgCgDgFAAIiAAAQgEAAgCADg");
	this.shape_39.setTransform(40.75,354.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#3FA9F5").p("ABMAAQAAAFgDADQgDAEgFAAIiBAAQgFAAgDgEQgDgDAAgFQAAgEADgEQADgDAFAAICBAAQAFAAADADQADAEAAAEg");
	this.shape_40.setTransform(40.75,354.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhAAMQgFAAgDgDQgEgEABgFQgBgEAEgDQADgEAFAAICAAAQAGAAADAEQADADABAEQgBAFgDAEQgDADgGAAg");
	this.shape_41.setTransform(40.75,354.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#3FA9F5").p("Ag1AKQgEAAgDgDQgDgCAAgFQAAgDADgDQADgDAEAAIBsAAQAEAAADADQACADAAADQAAAEgCADQgDADgEAAIhsAAIAAAGIBsAAQAGAAAFgFQAEgFAAgGQAAgGgEgEQgFgFgGAAIhsAAQgHAAgEAFQgFAEAAAGQAAAGAFAFQAEAFAHAA");
	this.shape_42.setTransform(11.65,389.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3FA9F5").s().p("Ag1AQQgHAAgEgFQgFgFAAgGQAAgGAFgEQAEgFAHAAIBsAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgGAAgAg8gGQgDADAAADQAAAFADACQADADAEAAIBsAAQAEAAADgDQACgDAAgEQAAgDgCgDQgDgDgEAAIhsAAQgEAAgDADg");
	this.shape_43.setTransform(11.65,389.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#3FA9F5").p("Ag2ANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIBtAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_44.setTransform(11.65,389.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag1ANQgGAAgDgEQgEgEAAgFQAAgEAEgEQAEgEAFAAIBsAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_45.setTransform(11.65,389.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#3FA9F5").p("AAKBHQAAAEgDADQgCADgFAAQgDAAgDgDQgDgDAAgEIAAiNQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAACNIAGAAIAAiNQAAgHgFgEQgFgFgGAAQgGAAgEAFQgFAEAAAHIAACNQAAAHAFAFQAEAEAGAAQAHAAAEgEQAFgFAAgH");
	this.shape_46.setTransform(25.025,373.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3FA9F5").s().p("AgKBTQgFgGAAgGIAAiNQAAgHAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAHIAACNQAAAHgFAFQgEAEgHAAQgGAAgEgEgAgGhNQgDADAAAEIAACNQAAAEADADQADADADAAQAFAAACgDQADgDAAgEIAAiNQAAgEgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_47.setTransform(25.025,373.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#3FA9F5").p("AANBHQAAAFgEAEQgEAEgFAAQgEAAgEgEQgEgEAAgFIAAiNQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFg");
	this.shape_48.setTransform(25.025,373.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgIBQQgEgDAAgGIAAiNQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFIAACNQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_49.setTransform(25.025,373.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#3FA9F5").p("ABkBHQAAANgIAIQgIAJgNAAIiNAAQgOAAgHgJQgJgIAAgNIAAiNQAAgNAJgIQAHgJAOAAICNAAQANAAAIAJQAIAIAAANIAACNIAGAAIAAiNQAAgPgKgKQgKgKgPAAIiNAAQgPAAgKAKQgKAKAAAPIAACNQAAAPAKAKQAKAKAPAAICNAAQAPAAAKgKQAKgKAAgP");
	this.shape_50.setTransform(40.75,373.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3FA9F5").s().p("AhHBrQgOAAgKgLQgLgKAAgOIAAiOQAAgPALgKQAKgLAOABICOAAQAPgBAKALQAKAKAAAPIAACOQAAAOgKAKQgKALgPAAgAhbhbQgJAJAAAMIAACOQAAAMAJAIQAHAJANAAICOAAQAMAAAJgJQAJgIgBgMIAAiOQABgMgJgJQgJgJgMABIiOAAQgNgBgHAJg");
	this.shape_51.setTransform(40.75,373.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#3FA9F5").p("ABoBHQAAAOgKAJQgJAKgOAAIiNAAQgOAAgJgKQgKgJAAgOIAAiNQAAgNAKgKQAJgKAOAAICNAAQAOAAAJAKQAKAKAAANg");
	this.shape_52.setTransform(40.75,373.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhHBnQgNABgJgKQgJgJAAgNIAAiOQAAgOAJgJQAJgKANAAICOAAQAOAAAJAKQAKAJAAAOIAACOQAAANgKAJQgJAKgOgBg");
	this.shape_53.setTransform(40.75,373.25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#3FA9F5").p("AieBnIAAhwIGaAAIADgBIAAgCIAAhaIAAgDIgDAAImqAAQghAAgYAXQgXAXAAAhIAACBIABACIACABIBaAAIACgBgAikBkIhUAAIAAh+QAAgdAVgXQAWgVAfAAIGnAAIAABUImaAAIgCAAIgBADgAihBnIAAgDIgDAAIAAADIADAAIADAA");
	this.shape_54.setTransform(32.4,379.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3FA9F5").s().p("Aj7BqIgCgBIgBgCIAAiBQAAghAYgXQAXgXAhAAIGqAAIADAAIAAADIAABaIAAACIgDABImaAAIAABwIgBACIgCABgAjjhOQgVAXAAAdIAAB+IBUAAIAAhwIABgDIACAAIGaAAIAAhUImnAAQgfAAgWAVg");
	this.shape_55.setTransform(32.4,379.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#3FA9F5").p("AihBnIhaAAIAAiBQAAgfAWgXQAXgWAgAAIGqAAIAABaImdAAg");
	this.shape_56.setTransform(32.4,379.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Aj7BnIAAiBQAAgfAWgXQAXgWAgAAIGqAAIAABaImdAAIAABzg");
	this.shape_57.setTransform(32.4,379.175);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#3FA9F5").p("ABKAZQAAAKgIAIQgIAIgKAAIhfAAQgKAAgIgIQgIgIAAgKIAAgxQAAgKAIgJQAIgHAKAAIBfAAQAKAAAIAHQAIAJAAAKIAAAxIAGAAIAAgxQAAgNgKgKQgKgJgMAAIhfAAQgMAAgKAJQgKAKAAANIAAAxQAAANAKAKQAKAJAMAAIBfAAQAMAAAKgJQAKgKAAgN");
	this.shape_58.setTransform(40.75,365.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3FA9F5").s().p("AgvA5QgMAAgKgJQgKgKAAgNIAAgxQAAgNAKgKQAKgJAMAAIBfAAQANAAAJAJQAJAKAAANIAAAxQAAANgJAKQgJAJgNAAgAhBgqQgHAIgBAKIAAAxQABAKAHAIQAIAIAKAAIBfAAQAJAAAJgIQAIgIgBgKIAAgxQABgKgIgIQgJgIgJAAIhfAAQgKAAgIAIg");
	this.shape_59.setTransform(40.75,365.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#3FA9F5").p("ABMAZQAAAMgIAJQgIAIgMAAIhfAAQgMAAgIgIQgIgJAAgMIAAgxQAAgMAIgIQAIgJAMAAIBfAAQAMAAAIAJQAIAIAAAMg");
	this.shape_60.setTransform(40.75,365.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgvA2QgLAAgJgJQgIgIAAgMIAAgxQAAgMAIgJQAJgIALAAIBfAAQALAAAJAIQAJAJAAAMIAAAxQAAAMgJAIQgJAJgLAAg");
	this.shape_61.setTransform(40.75,365.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#3FA9F5").p("AAJAoIgRAAIAAhPIARAAgAAPArIAAhVIgBgCIgDgBIgVAAIgDABIgBACIAABVIABACIADABIAVAAIADgBgAALArIAAgDIgCAAIAAADIACAAIAEAA");
	this.shape_62.setTransform(40.75,358.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3FA9F5").s().p("AgLAuIgBgBIgBgCIAAhVIABgCIABgBIAXAAIACABIABACIAABVIgBACIgCABgAgIAoIAQAAIAAhPIgQAAg");
	this.shape_63.setTransform(40.75,358.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#3FA9F5").p("AALArIgVAAIAAhVIAVAAg");
	this.shape_64.setTransform(40.75,358.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgLArIAAhVIAXAAIAABVg");
	this.shape_65.setTransform(40.75,358.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("Ai5DmIgGAAQgMgBgBgLIAAjyIgOAMQgMAKgIgKQgEgEABgFQABgGAFgEIDgjAQAHgGAEAAQAFAAAHAGIDgC/QAIAHgCAHQgBAIgGACQgHACgGgEIgRgOIAAD0QgCAHgIADIgJAAgAA8AnQAKAAAEAEQAEADAAALIAACTIBlAAIABgEIAAjyQAAgEgEgDIiwiWIgBABIiuCVQgDACAAAGIAAD1IBmAAIAAiUQAAgKAEgDQADgEAKAAgAgyDMIBlAAIAAiLIhlAAg");
	this.shape_66.setTransform(29.984,269.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AEZCFIgGgEIkTjpIkSDpQgGAFgEAAQgJADgGgMIAAgGIAIgKIEYjtQAHgGAEAAQAFAAAHAGIBVBIIAAgHIAAgqQAAgPAPAAIA5AAQAQAAAAAQIAAB0QAAAGAEAEIBoBYQAJAJgDAIQgCAFgGACIgDABQgEAAgDgCgAB7gkQAAACADADIAhAbIAAhaIgkAAg");
	this.shape_67.setTransform(29.9721,252.9531);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#996600").s().p("AhdAYQgPAAgHgOQgGgNAKgLQAHgJAMAAIC5AAQALAAAIAHQAHAHAAAJQAAAKgIAHQgHAHgLAAgAhlAAQgBAHAKABIC3AAIAFAAQAGgEAAgCQABgDgDgEQgCgCgFAAIi5AAQgJAAAAAHg");
	this.shape_68.setTransform(202.7875,386.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#996600").s().p("AheAYQgKAAgHgHQgGgGgBgKQAAgJAHgHQAHgHAJgBIC8AAQAKAAAHAHQAIAGAAAJQABAKgHAHQgHAIgLAAgAhlAAQgBABADAFQACACAFAAIC5AAQAJAAAAgIQABgCgDgCQgDgDgEAAIi8AAQgGAFAAACg");
	this.shape_69.setTransform(202.8063,367.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#996600").s().p("AhyAYQgLAAgHgFQgNgLAFgOQAFgQARgBIDqAAQALAAAHAGQAHAGABAKQABAIgGAIQgGAHgJABIgHABgAh3gHQgGADAAAEQAAAHAHABIDuAAQAGgCAAgFQABgGgGgBIgFgBIjmAAg");
	this.shape_70.setTransform(202.7877,374.075);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#996600").s().p("AhyAYQgLAAgGgFQgOgKAFgPQAEgPARgCIDqAAIAKABQAIACAFAHQAFAHgBAIQgBAJgGAGQgGAGgJABgAh2gHQgHABAAAGQgBAGAHABIAGABIDoAAQAIgBAAgHQgBgGgIgBIjnAAg");
	this.shape_71.setTransform(202.7908,380.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#996600").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAIAAAIQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgHAAQAAADACACQACADADAAQAIAAAAgIQAAgHgIAAQgHAAAAAHg");
	this.shape_72.setTransform(220.975,359.025);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#996600").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgGAJAAQAKgBAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgHABQAAADADACQACACACAAQADAAACgCQADgDAAgDQAAgHgIAAQgIAAABAIg");
	this.shape_73.setTransform(220.975,395.4483);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#996600").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJABQAKAAAHAGQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgHAAQAAAHAHABQADAAACgCQADgCAAgEQAAgHgIAAQgHAAAAAHg");
	this.shape_74.setTransform(184.625,395.4483);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#996600").s().p("AgQARQgHgHAAgKQAAgIAHgIQAIgHAIAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgEgFQgDACAAADQAAADACACQACADADAAQADAAACgCQADgCAAgDQAAgDgCgCQgCgDgDAAIgBAAQgCAAgCACg");
	this.shape_75.setTransform(184.625,359.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#996600").s().p("AiBCJQg5g2gChOQgChOA2g4QA2g6BOgCQBOgCA5A2QA5A2ACBQQABBOg2A4Qg2A5hPACIgEAAQhKAAg3g1gAh5h7QgzA0gBBHQAABHAzA0QAzAzBHAAQBHAAA0gzQAzgzAAhIQAAhHgygyQgzgzhIgBIgBgBQhGAAgzAzg");
	this.shape_76.setTransform(202.7985,377.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#996600").s().p("AjKDuIgBgBQghgJAAgiIAAmGQAAgaAYgMIAJgCIGWAAIAFABQATAGAIATIACAIIAAGVIgBAEQgFATgTAIIgKAEgAjcjCIAAGFQAAAbAaAAIGEAAQAbAAAAgbIAAmFQAAgbgbAAImEAAQgaAAAAAbg");
	this.shape_77.setTransform(202.8,377.25);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1135FF").s().p("AjIEvQgEgDAAgEIgBgsQAAgZAEgRQAIgjAdgXQAcgWAkAAQARgBANgLQAMgLABgRQAAgFgEgDQhCgkgHhLIAAgCIgLgFQgVgNAAgWIAAh9QAAgPAJgMQAJgLAPgFQAFgBABgDQAcg0A6gIIACAAIBsAAIAQADQAkAJAYAeQAYAdAAAlIAAB5QAAAMgKAAQgKAAAAgMIAAh2QAAgggTgYQgTgYgegIQgLgDgMAAIhVAAQg7ABgZA2QgEAIgIAAQgXADAAAXIAAB4QAAAOAMAGIAAhOQAAgMAMABQARABALgJQAMgJADgRIABgIQABgHAEgDQAFgCAHAEQAYAQANAGQAuAaA5AIQAJABAAAHQABAGgFAEQgCADgIgBQgzgIgsgVIgogVQgMAogpAEIAABUQAAAzAkAiQAkAiAzgDQAogCAfgdQAfgdADgmQACgPAAgtIAAgmQAAgMAKAAQAKgBAAAOIAABUQgBA7guAoQgvAog6gJQgIAAgMgDIgHAVQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIAqAxIARgTQAHgIAHAFQAHAEgEAJIAAAEIAYAcIAKgtQAAgBgDgEIgQgSQgHgIAIgHQAJgGAGAKQAOATAXABQArAAAdAdQAeAeACAqQABAegBAgQAAALgKAAQgKAAAAgMIAAg3QAAglgYgZQgZgYglgBIgMgBIgOA/QgCAHgGABQgFACgFgFIgUgXIAMBgQACANgKABQgLABgBgNIgNhsIgBgBIgGAFQgFADgCAAQgCAAgEgDIgIgFIgNBuQgCAMgKgBQgKgBACgMIAMhhIgTAWQgGAGgFgCQgHgCgBgHIgOg+QglABgQAKQgrAZgCAxIAAA6QAAAKgIACIgCAAQgDAAgDgBgAhACLQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABIAKAtIAYgdIgYgbg");
	this.shape_78.setTransform(202.7975,150.1393);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF66CC").s().p("AAMBAIgHgLIgchjIAAgCQgDgMAKgDQAIgCAEAMIAcBkQACAHgBADQgBADgFAEg");
	this.shape_79.setTransform(22.8821,176.4285);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF66CC").s().p("ADBExQgIgDAAgKIAAg5QAAgbgPgVQgPgWgZgJIgWgGIgpCQQgCADgFAIIgIAAQgFgEgBgDQgBgDACgHIAoiKIgagPQgEgCgJgLQgGgJAIgHQAIgFAHAIQAMAUAbABQAuABAeAkIADADQARgPAHgIQALgMgLgRQgPgTAHgUQADgJAIgKQAOgQgNgSIgMgPQgPgSAHgXIAIgcQAGgWgUgKQgYgJgHgKQgHgLAAgaQAAgogGgUQgNgigdgWQgegVglAAQg9AAgQABQgmAEgeAeQgdAegDAmIgBAsQAAAfgdAMIgKAEQgTAJAFATIAJAfQAHAYgPARIgNAQQgNARAPAQQAZAcgVAeQgNARAPAQIATATIAPgOQAdgZAogBQARgBALgJQAMgLADgQQABgIgHgDQg6ghgMhBQgCgLAKgCQAKgCACAMQAHApAgAcQAgAbAqABQAqAAAggbQAggbAIgqQABgIAAgbQABgVgBgVQAAgFgDgBQgUgJgLgJQgKgKgOgUIgDAFQhABHhgAQIgbACQgLABgBgKQgBgKANgBQBxgHBGhYQAFgHAGABQAGAAADAIQARAmAnAMQAGACACADQACADAAAHIAABBQgBA0giAnQgiAng1AFQgYADgWgGIgEgBIgIAXIgPAVIA4AsQADADAEgDIAggYQAHgGAFAFQAEAEAAAHQAAABgFAGIggAYQgFAEAAAGIAAA+IAAAHQgCAJgIgBQgHgBgCgHIAAgHIAAg+QAAgGgEgEIg/gwQgDgCgGAAIgaADQggAEgUAYQgVAXAAAhIAAA5QABAJgIAEIgGAAQgIgEAAgKIAChEQAAgHADgKIAFgTIgWgVQgNgNgBgQQgBgQAKgPQANgRgPgQQgMgNgBgQQgBgQALgNIAOgRQAHgKgDgLIgJgfQgFgRAHgPQAHgOARgIIALgEQAPgGAAgRQAAgjABgLQADgrAggkQAggiAsgHIAMgDIBVAAIAeAHQApAOAaAjQAaAjABArIABAjQgBARAQAGIAMAFQAPAHAHAOQAHAPgFAQIgJAfQgDANAIAKIANAQQALAOgBAPQgBAQgMANQgHAJgBAHQAAAJAGAJQAKAPgBAPQgBAQgNANIgWAVQAIAiABAHQABAWgBAtQAAADgGAHg");
	this.shape_80.setTransform(29.975,152.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.7,234.7,408.3);


(lib.ejidojilo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape.setTransform(584.875,61.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBviWIA5AAIhmCOIA+AAIAAgrIA1AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_1.setTransform(562.35,61.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgPgKgIQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_2.setTransform(539.775,61.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgMQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAXIg2AzIBlAAIAAAtg");
	this.shape_3.setTransform(411.675,60.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape_4.setTransform(390.875,60.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgMQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAXIg2AzIBlAAIAAAtg");
	this.shape_5.setTransform(369.175,60.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_6.setTransform(585.675,-52.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgTAJgOQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAOAAATQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAJAUAAQAUAAAMgJQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQAAQARAAAKgHQAKgIAAgNQAAgOgKgJQgKgHgRAAQgQAAgKAHg");
	this.shape_7.setTransform(563.275,-52.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgOAFgJQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_8.setTransform(541.575,-53.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgSQALgRAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape_9.setTransform(411.975,-51.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_10.setTransform(390.225,-51.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_11.setTransform(368.525,-51.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_12.setTransform(584.925,-163.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA6AAIhmCOIA+AAIAAgrIA1AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_13.setTransform(568.2,-163.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag1ByQgYgGgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYATAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_14.setTransform(545.725,-163.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_15.setTransform(409.925,-164.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_16.setTransform(393.825,-163.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag1BzQgYgHgRgNIAWgpQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_17.setTransform(374.025,-163.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgPgKgIQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_18.setTransform(515.325,-284.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_19.setTransform(495.075,-284.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAYAOQAXAPAMAcQAOAbAAAmQAAAngOAbQgMAcgXAOQgYAPgdAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQANATAUAAQAVAAANgTQAMgTAAgnQAAgmgMgTQgNgSgVAAQgUAAgNASg");
	this.shape_20.setTransform(473.1,-284.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAGIgHAUIgUAxg");
	this.shape_21.setTransform(457.125,-272.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_22.setTransform(444.675,-284.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgyBrQgdgPgRgcQgRgdAAgjQAAgiARgdQARgcAdgPQAegQAjAAQAgAAAZAKQAYALARAVIgjAgQgYgbgjAAQgWAAgRAJQgSAKgKARQgJASAAAVQAAAWAJASQAKAQASALQARAJAWAAQAjAAAYgcIAjAgQgQAWgaAKQgZALgfAAQgjAAgegQg");
	this.shape_23.setTransform(566.2,-388.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_24.setTransform(542.725,-388.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhmB3IAAjtIBmAAQAgAAAXAKQAXALANAUQAMATAAAbQAAAagMASQgNAUgXAKQgXALgggBIgvAAIAABCgAgvAIIAtAAQAYABANgKQANgLAAgTQAAgVgNgLQgNgKgYAAIgtAAg");
	this.shape_25.setTransform(518.975,-388.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_26.setTransform(495.075,-388.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_27.setTransform(472.55,-388.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_28.setTransform(447.725,-388.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_29.setTransform(424.325,-388.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_30.setTransform(407.225,-388.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AgvBwQgVgJgNgRIAfgkQAUAaAZAAQAgAAAAgnIAAhxIhTAAIAAgsICJAAIAACZQAAAsgVAWQgWAWgpAAQgYAAgUgJg");
	this.shape_31.setTransform(390.85,-388.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_32.setTransform(554.825,-420.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAQAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjABIgyAAg");
	this.shape_33.setTransform(529.475,-420.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_34.setTransform(490.775,-420.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAQAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjABIgyAAg");
	this.shape_35.setTransform(463.075,-420.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_36.setTransform(442.725,-420.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AgwBwQgTgJgNgQIAeglQATAaAZAAQAhAAAAgoIAAhvIhTAAIAAgtICKAAIAACZQgBAsgVAWQgWAWgpAAQgYAAgVgJg");
	this.shape_37.setTransform(426.35,-420.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_38.setTransform(407.975,-420.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_39.setTransform(478.375,-108.425);
	this.shape_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AlkCkIApiUIBljwICbgKIAYgnIAOgiIACgIIAKhIIAqABIAGABIAZAIIAyAVIAOAUIAGAGIAKAIIAIAEIAhAMIAVAUIBYBEIATATIAJAMIASAcIASAlIgDAdIgVA+IgxBTIitDbIhCBaIgPAaIgpgSIgzgfIiChuIgsgfIglgRIgngMg");
	this.shape_40.setTransform(-0.0403,0.0844);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ABD25D").s().p("AgLFyIgygfIiChuIgtgfIgkgSIgogMIgtgEIApiTIBmjwICbgLIAYgnIAOghIACgJIAKhIIAqACIAFABIAZAHIAyAVIAPAUIAGAHIAJAHIAIAEIAhAMIAWAVIBXBDIATAUIAKALIASAcIASAlIgDAdIgVA/IgxBSIiuDcIhBBZIgPAbg");
	this.shape_41.setTransform(0.025,0.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AlkCkIApiUIBljwICbgKIAYgnIAOgiIACgIIAKhIIAqABIAGABIAZAIIAyAVIAOAUIAGAGIAKAIIAIAEIAhAMIAVAUIBYBEIAcAfIASAcIASAlIgDAdIgVA+IgxBTIitDbIhCBaIgPAaIgpgSIgzgfIiChuIgsgfIglgRIgngMg");
	this.shape_42.setTransform(-0.0403,0.0844);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF1000").s().p("AgLFyIgygfIiChuIgtgfIgkgSIgogMIgtgEIApiTIBmjwICbgLIAYgnIAOghIACgJIAKhIIAqACIAFABIAZAHIAyAVIAPAUIAGAHIAJAHIAIAEIAhAMIAWAVIBXBDIAdAfIASAcIASAlIgDAdIgVA/IgxBSIiuDcIhBBZIgPAbg");
	this.shape_43.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-448.5,701.1,533);


(lib.ejsanlorenzo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQALgRAAgjQAAgjgLgRQgLgRgUAAQgTAAgKARg");
	this.shape.setTransform(583.9,117.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAQBsIAAgtIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgoIAvAAIAAAoIAkAAIAAApIgkAAIAAAtg");
	this.shape_1.setTransform(563.075,117.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIATgmQANAJAQAFQAQAFARAAQASAAALgHQALgIAAgNQAAgagogBIgWAAIAAggIArgyIhcAAIAAgpICXAAIAAAhIgwA4QAcAFAPAQQAPAPAAAZQABATgLAQQgJAQgVAKQgUAKgdAAQgWgBgXgGg");
	this.shape_2.setTransform(542.35,117.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AAQBsIAAgtIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgoIAvAAIAAAoIAkAAIAAApIgkAAIAAAtg");
	this.shape_3.setTransform(410.975,116.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgvBsIBNiuIhHAAIAAAjIgtAAIAAhNICtAAIAAAhIhRC3g");
	this.shape_4.setTransform(390.25,116.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgvBoQgXgGgPgLIATgmQAMAJARAFQAQAFASAAQARAAALgHQALgIAAgNQAAgbgnABIgYAAIAAghIAsgyIhbAAIAAgpICXAAIAAAhIgyA4QAdAFAPAQQAQAQAAAYQAAATgKAQQgLAQgUAKQgUAJgcABQgYAAgVgHg");
	this.shape_5.setTransform(371.05,116.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgeg0QgLARAAAjQAAAjALARQAMASASAAQAUAAALgSQAMgRgBgjQABgjgMgRQgLgRgUAAQgSAAgMARg");
	this.shape_6.setTransform(582.05,3.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgwBoQgUgIgLgPQgLgQAAgUQgBgRAJgNQAJgNAPgHQgMgHgHgMQgGgLAAgPQAAgSALgOQAKgOATgIQATgHAYAAQAZAAATAHQATAIAKAOQAKAOABASQgBAPgGALQgHAMgMAHQAQAHAJANQAJANAAARQgBAUgLAQQgMAPgVAIQgUAIgbAAQgaAAgWgIgAgdAVQgLAJAAAOQAAAOALAJQALAIASAAQASAAALgIQAMgJgBgOQABgOgMgJQgLgIgSAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAJgHQAJgHAAgMQAAgNgJgHQgJgIgPAAQgPAAgJAIg");
	this.shape_7.setTransform(561.35,3.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgvBoQgXgGgQgLIAUgmQAMAJARAFQAQAFASAAQARAAALgHQALgHAAgOQAAgagnAAIgYAAIAAghIAsgyIhbAAIAAgoICXAAIAAAgIgyA4QAdAFAPAQQAQAPAAAZQgBATgJAQQgLAQgUAJQgUAKgcAAQgYABgVgHg");
	this.shape_8.setTransform(541.4,3.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_9.setTransform(412.075,4.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQAMgRAAgjQAAgjgMgRQgLgRgUAAQgTAAgKARg");
	this.shape_10.setTransform(392.8,4.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AAQBsIAAgtIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgnIAvAAIAAAnIAkAAIAAApIgkAAIAAAtg");
	this.shape_11.setTransform(371.975,4.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgvBtIBNiwIhHAAIAAAkIgtAAIAAhNICtAAIAAAhIhRC4g");
	this.shape_12.setTransform(579.15,-107.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgDBtIAAiwIgrAAIAAgpIBdAAIAADZg");
	this.shape_13.setTransform(562.4,-107.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgwBoQgUgIgLgPQgMgQAAgUQAAgRAJgNQAIgNAQgHQgMgHgHgMQgGgLAAgPQAAgSAKgOQALgOATgIQATgHAYAAQAYAAATAHQATAIALAOQALAOAAASQgBAPgGALQgHAMgMAHQAQAHAJANQAJANAAARQgBAUgMAQQgLAPgUAIQgVAIgbAAQgaAAgWgIgAgdAVQgLAJAAAOQAAAOALAJQALAIASAAQASAAAMgIQALgJgBgOQABgOgLgJQgMgIgSAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAJgHQAJgHAAgMQAAgNgJgHQgJgIgPAAQgPAAgJAIg");
	this.shape_14.setTransform(547.3,-107.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag1BsQgQgEgLgHIASglQAQALAZAAQAbAAAQgQQAQgRABgeQgTATgiAAQgVAAgRgIQgRgIgKgPQgKgPAAgUQAAgWALgQQALgRATgJQATgIAXAAQAsAAAaAbQAaAcAAA0QAAAkgOAaQgOAbgZANQgZAOggAAQgRAAgQgEgAgehBQgKAIAAAPQAAAPAKAJQALAJAQAAQAQAAAKgJQALgJAAgPQAAgOgLgJQgKgJgQAAQgQAAgLAJg");
	this.shape_15.setTransform(411.225,-107.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIATgmQAMAJARAFQAQAFARAAQASAAALgHQALgIAAgNQAAgbgoABIgXAAIAAghIAsgyIhcAAIAAgpICYAAIAAAhIgxA4QAcAFAPAQQAPAQAAAYQABATgKAQQgKAQgVAKQgUAJgdABQgXAAgWgHg");
	this.shape_16.setTransform(391.95,-107.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgwBoQgUgIgLgPQgMgQAAgUQAAgRAJgNQAIgNAQgHQgMgHgHgMQgGgLAAgPQAAgSAKgOQALgOATgIQATgHAYAAQAYAAATAHQATAIALAOQALAOAAASQgBAPgGALQgHAMgMAHQAQAHAJANQAJANAAARQgBAUgMAQQgLAPgUAIQgVAIgbAAQgaAAgWgIgAgdAVQgLAJAAAOQAAAOALAJQALAIASAAQASAAAMgIQALgJgBgOQABgOgLgJQgMgIgSAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAJgHQAJgHAAgMQAAgNgJgHQgJgIgPAAQgPAAgJAIg");
	this.shape_17.setTransform(373.15,-107.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_18.setTransform(512.075,-228.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgwBoQgWgGgPgLIATgnQANAKAQAFQAQAFARAAQASAAALgHQALgIAAgNQAAgOgMgHQgLgIgbAAIg3AAIALh4ICDAAIAAAoIhZAAIgEApIASAAQAtAAAWATQAVAQAAAfQABAUgLAQQgKARgTAJQgVALgdgBQgWAAgXgGg");
	this.shape_19.setTransform(492.4,-228.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_20.setTransform(473.875,-228.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgaA0IAOgxQgIgDgEgFQgFgIAAgJQAAgNAJgIQAIgJAMABQANgBAJAJQAIAIAAANQAAAGgCAGIgGASIgSAsg");
	this.shape_21.setTransform(459.675,-218.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgCBtIAAiwIgsAAIAAgoIBdAAIAADYg");
	this.shape_22.setTransform(448.35,-228.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ag8BhQgbgOgPgaQgQgZAAggQAAgfAQgaQAPgZAbgPQAbgOAhAAQAiAAAbAOQAbAPAPAZQAQAaAAAfQAAAggQAZQgPAagbAOQgbAPgiAAQghAAgbgPgAgig8QgPAJgJAQQgJAQAAATQAAAUAJAQQAJAPAPAJQAQAJASAAQATAAAQgJQAPgJAJgPQAJgQAAgUQAAgTgJgQQgJgQgPgJQgQgJgTAAQgSAAgQAJg");
	this.shape_23.setTransform(642.225,-353.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgtBiQgagPgQgZQgPgaAAggQAAggAPgZQAQgaAagOQAbgOAhAAQAcAAAWAJQAXAKAQATIghAeQgWgaggAAQgUAAgPAJQgQAJgJAQQgJAQAAATQAAAUAJAQQAJAPAQAJQAPAJAUAAQAgAAAWgaIAhAeQgQATgXAKQgXAKgcAAQggAAgbgOg");
	this.shape_24.setTransform(618,-353.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhHBUQgagZAAgwIAAh4IAyAAIAAB2QAAA7AvgBQAYAAAMgNQAMgOAAgfIAAh2IAyAAIAAB4QAAAwgaAZQgaAaguAAQguAAgZgag");
	this.shape_25.setTransform(594.225,-353.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgYBtIAAhOIhUiKIA1AAIA5BgIA6hgIAxAAIhUCKIAABOg");
	this.shape_26.setTransform(571.525,-353.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhTBtIAAjYICjAAIAAAoIhxAAIAAAvIBkAAIAAAmIhkAAIAAAyIB1AAIAAApg");
	this.shape_27.setTransform(551.225,-353.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgYBtIAAiwIhGAAIAAgoIC9AAIAAAoIhGAAIAACwg");
	this.shape_28.setTransform(530.675,-353.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgtBiQgbgPgPgZQgQgaAAggQAAggAQgZQAPgaAbgOQAbgOAgAAQAcAAAYAJQAWAKAPATIgfAeQgXgaggAAQgUAAgPAJQgQAJgJAQQgIAQAAATQAAAUAIAQQAJAPAQAJQAPAJAUAAQAgAAAXgaIAfAeQgPATgXAKQgXAKgcAAQggAAgbgOg");
	this.shape_29.setTransform(509.95,-353.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("Ag8BhQgbgOgPgaQgQgZAAggQAAgfAQgaQAPgZAbgPQAbgOAhAAQAiAAAbAOQAbAPAPAZQAQAaAAAfQAAAggQAZQgPAagbAOQgbAPgiAAQghAAgbgPgAgig8QgPAJgJAQQgJAQAAATQAAAUAJAQQAJAPAPAJQAQAJASAAQATAAAQgJQAPgJAJgPQAJgQAAgUQAAgTgJgQQgJgQgPgJQgQgJgTAAQgSAAgQAJg");
	this.shape_30.setTransform(485.325,-353.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("Ag8BhQgbgOgPgaQgQgZAAggQAAgfAQgaQAPgZAbgPQAbgOAhAAQAiAAAbAOQAbAPAPAZQAQAaAAAfQAAAggQAZQgPAagbAOQgbAPgiAAQghAAgbgPgAgig8QgPAJgJAQQgJAQAAATQAAAUAJAQQAJAPAPAJQAQAJASAAQATAAAQgJQAPgJAJgPQAJgQAAgUQAAgTgJgQQgJgQgPgJQgQgJgTAAQgSAAgQAJg");
	this.shape_31.setTransform(450.425,-353.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AheBtIAAghIB2iPIh0AAIAAgoIC2AAIAAAgIh2COIB7AAIAAAqg");
	this.shape_32.setTransform(427.225,-353.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AA6BtIhriDIAACDIgyAAIAAjYIAqAAIBrCCIAAiCIAyAAIAADYg");
	this.shape_33.setTransform(404.025,-353.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AhTBtIAAjYICjAAIAAAoIhxAAIAAAvIBkAAIAAAmIhkAAIAAAyIB1AAIAAApg");
	this.shape_34.setTransform(381.675,-353.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AAqBtIgqg9IgBAAIgsAAIAAA9IgyAAIAAjYIBeAAQAcgBAVAKQAVAJAMATQALARAAAYQAAAYgMARQgLASgWAJIAxBGgAgtAIIApAAQAWAAALgJQAMgKAAgSQAAgSgMgKQgLgKgWAAIgpAAg");
	this.shape_35.setTransform(360.075,-353.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("Ag8BhQgbgOgPgaQgQgZAAggQAAgfAQgaQAPgZAbgPQAbgOAhAAQAiAAAbAOQAbAPAPAZQAQAaAAAfQAAAggQAZQgPAagbAOQgbAPgiAAQghAAgbgPgAgig8QgPAJgJAQQgJAQAAATQAAAUAJAQQAJAPAPAJQAQAJASAAQATAAAQgJQAPgJAJgPQAJgQAAgUQAAgTgJgQQgJgQgPgJQgQgJgTAAQgSAAgQAJg");
	this.shape_36.setTransform(334.825,-353.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AhPBtIAAjYIAzAAIAACuIBsAAIAAAqg");
	this.shape_37.setTransform(313.575,-353.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AA6BsIhriCIAACCIgyAAIAAjYIAqAAIBrCEIAAiEIAyAAIAADYg");
	this.shape_38.setTransform(582.625,-381.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("ABFBsIgTguIhkAAIgUAuIgyAAIBgjYIAxAAIBhDYgAgiAYIBEAAIgihSg");
	this.shape_39.setTransform(558.25,-381.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AgzBpQgXgHgPgLIARgmQAOAKATAGQATAHAUAAQAUAAAKgHQALgGAAgLQAAgHgHgFQgGgGgJgDIgZgHQgZgFgPgGQgQgGgLgMQgMgNAAgWQAAgTALgPQAKgPAUgKQAVgIAdAAQAUAAAUAFQAUAEAPAKIgQAmQgdgRgfAAQgUAAgKAHQgKAGAAAMQAAALAMAFQALAGAXAFQAZAGAQAGQAQAGALALQALANAAAWQAAASgKAQQgKAPgVAJQgVAJgdAAQgZAAgZgHg");
	this.shape_40.setTransform(536.425,-381.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AhTBsIAAjYICjAAIAAApIhxAAIAAAvIBkAAIAAAmIhkAAIAAAyIB1AAIAAAog");
	this.shape_41.setTransform(507.975,-381.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AhsBsIAAjYIBjAAQAiAAAbAOQAbAOAPAYQAPAYAAAgQAAAggPAZQgPAYgbAOQgbANgiAAgAg6BEIAuAAQAgAAATgTQATgSAAgfQAAgegTgSQgTgSggAAIguAAg");
	this.shape_42.setTransform(484.875,-381.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("Ag8BhQgbgOgPgaQgQgZAAggQAAgfAQgaQAPgZAbgPQAbgOAhAAQAiAAAbAOQAbAPAPAZQAQAaAAAfQAAAggQAZQgPAagbAOQgbAPgiAAQghAAgbgPgAgig8QgPAJgJAQQgJAQAAATQAAAUAJAQQAJAPAPAJQAQAJASAAQATAAAQgJQAPgJAJgPQAJgQAAgUQAAgTgJgQQgJgQgPgJQgQgJgTAAQgSAAgQAJg");
	this.shape_43.setTransform(449.575,-381.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AhsBsIAAjYIBjAAQAiAAAbAOQAbAOAPAYQAPAYAAAgQAAAggPAZQgPAYgbAOQgbANgiAAgAg6BEIAuAAQAgAAATgTQATgSAAgfQAAgegTgSQgTgSggAAIguAAg");
	this.shape_44.setTransform(424.375,-381.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("AgYBsIAAjYIAxAAIAADYg");
	this.shape_45.setTransform(405.875,-381.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("AgrBmQgTgIgLgQIAcghQARAYAXAAQAeAAAAgkIAAhmIhMAAIAAgpIB9AAIAACMQAAAogUAUQgTAVgmAAQgWAAgSgJg");
	this.shape_46.setTransform(391,-381.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("AhTBsIAAjYICjAAIAAApIhxAAIAAAvIBkAAIAAAmIhkAAIAAAyIB1AAIAAAog");
	this.shape_47.setTransform(374.225,-381.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_48.setTransform(478.425,-57.975);
	this.shape_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AgJCUIghg3IgTgYIgVgTIgRgMIgagNIgfgKIg6gMIgMgKIgCgDIgEgJIgBgHIgCgoIBVgwIAOgJIANgMIAIgNIAEgLIAagCIBOgSIARAAIDiB7IgEApIgEAQIgKAXIgPAaIg7BIIgTAeIgMAbIgygVIgZgIIgRgCg");
	this.shape_49.setTransform(0.0326,0.0735);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#ABD25D").s().p("AA/CfIgZgIIgRgCIgeAAIghg4IgTgXIgVgTIgRgMIgagNIgfgKIg6gMIgMgLIgCgCIgEgJIgBgIIgCgnIBVgwIAOgJIANgNIAIgMIAEgLIAagCIBOgSIARgBIDiB8IgEAoIgEAQIgKAYIgPAaIg7BIIgTAeIgMAag");
	this.shape_50.setTransform(0.025,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AgJCUIghg3IgTgYIgVgTIgRgMIgagNIgfgKIg6gMIgMgKIgCgDIgEgJIgBgHIgCgoIBjg5IANgMIAIgNIAEgLIAagCIBOgSIARAAIDiB7IgEApIgEAQIgKAXIgPAaIg7BIIgTAeIgMAbIgygVIgZgIIgRgCg");
	this.shape_51.setTransform(0.0326,0.0735);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF1000").s().p("AA/CfIgZgIIgRgCIgeAAIghg4IgTgXIgVgTIgRgMIgagNIgfgKIg6gMIgMgLIgCgCIgEgJIgBgIIgCgnIBjg5IANgNIAIgMIAEgLIAagCIBOgSIARgBIDiB8IgEAoIgEAQIgKAYIgPAaIg7BIIgTAeIgMAag");
	this.shape_52.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-406.9,687.3,545.5);


(lib.ejcosco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape.setTransform(501.725,102.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_1.setTransform(481.175,102.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_2.setTransform(459.925,102.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA6AAIhmCOIA+AAIAAgsIA1AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_3.setTransform(332.85,100.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgHg");
	this.shape_4.setTransform(310.025,101);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhnCOIBAAAIAAgsIAzAAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_5.setTransform(289.25,100.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_6.setTransform(505.675,-10.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA6AAIhmCOIA/AAIAAgsIA0AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_7.setTransform(483.15,-10.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBviWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_8.setTransform(459.7,-10.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgQAVgIQAVgIAaAAQAbAAAVAIQAVAIALAQQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAARQAAAPAMAJQAMAJAUAAQAUAAAMgJQAMgJAAgPQAAgRgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQAAQARAAAKgIQAKgIAAgOQAAgOgKgHQgKgJgRAAQgQAAgKAJg");
	this.shape_9.setTransform(332.675,-9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape_10.setTransform(310.1,-9.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIAzAAIAAArIAoAAIAAAtIgoAAIAAAyg");
	this.shape_11.setTransform(286.65,-9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_12.setTransform(504.875,-121.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBviWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_13.setTransform(483.1,-121.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAIAUABQAUgBAMgIQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQAAQARAAAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_14.setTransform(459.775,-121.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_15.setTransform(326.425,-122.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_16.setTransform(313.075,-122.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgSAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape_17.setTransform(296.575,-122.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgIQAVgJAaAAQAbAAAVAJQAVAIALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAARQAAAPAMAJQAMAJAUAAQAUAAAMgJQAMgJAAgPQAAgRgMgIQgMgKgUAAQgUAAgMAKgAgahKQgKAJAAANQAAAOAKAIQAKAIAQAAQARAAAKgIQAKgIAAgOQAAgNgKgJQgKgIgRAAQgQAAgKAIg");
	this.shape_18.setTransform(435.975,-242.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_19.setTransform(414.375,-242.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAjIhYDKg");
	this.shape_20.setTransform(393.875,-242.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_21.setTransform(379.025,-231.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_22.setTransform(366.575,-242.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_23.setTransform(499.925,-347.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgaB3IAAjAIhNAAIAAgtIDOAAIAAAtIhMAAIAADAg");
	this.shape_24.setTransform(477.4,-347.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_25.setTransform(453.9,-347.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_26.setTransform(424.625,-347.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_27.setTransform(394.075,-347.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgxBrQgegPgRgcQgQgcAAgkQAAgiAQgcQARgdAegPQAdgQAjAAQAfAAAZAKQAaAMAQAUIgjAgQgYgbgkAAQgVAAgRAJQgSAKgKARQgJASAAAVQAAAWAJARQAKARASAKQARAKAVAAQAkAAAYgcIAjAhQgQAUgaALQgZALgfAAQgjAAgdgQg");
	this.shape_28.setTransform(367.55,-347.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("Ag4BzQgagHgQgNIASgpQAQALAVAHQAVAHAVAAQAXAAALgHQALgHAAgLQAAgJgHgGQgGgFgKgEIgcgIQgbgFgRgHQgRgGgNgOQgMgOAAgYQAAgVALgRQALgQAXgLQAXgJAfAAQAXAAAWAGQAWAEAPALIgRAqQgggTghAAQgXAAgLAIQgLAHABANQgBALANAHQANAFAZAGQAbAHASAGQARAHANANQAMANAAAYQAAAVgMAQQgLARgXAKQgWAKggAAQgdAAgagIg");
	this.shape_29.setTransform(344.05,-347.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_30.setTransform(318.875,-347.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AgyBrQgdgPgRgcQgRgcAAgkQAAgiARgcQARgdAdgPQAegQAkAAQAfAAAZAKQAZAMAQAUIgjAgQgYgbgjAAQgWAAgRAJQgRAKgLARQgJASAAAVQAAAWAJARQALARARAKQARAKAWAAQAjAAAYgcIAjAhQgRAUgZALQgZALgfAAQgjAAgegQg");
	this.shape_31.setTransform(292.35,-347.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_32.setTransform(469.225,-379.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAPAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_33.setTransform(443.875,-379.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKASQAKARARAKQARAJAUAAQAVAAARgJQARgKAJgRQAKgSAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_34.setTransform(405.175,-379.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAPAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_35.setTransform(377.475,-379.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_36.setTransform(357.125,-379.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AgwBwQgTgJgNgRIAegkQAUAaAZAAQAgAAAAgoIAAhvIhTAAIAAgtICKAAIAACZQgBAsgVAWQgWAWgpAAQgYAAgVgJg");
	this.shape_37.setTransform(340.75,-379);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_38.setTransform(322.375,-379.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_39.setTransform(399.025,-68.475);
	this.shape_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Aj+hhIApgUIASACIBHAMICSAGIAVgUIDVAUIAADWIgygJIhJgVIiEg9IhlgFIgtgJIgYgKIgWgMIgUgRIgMgOIgQgZg");
	this.shape_40.setTransform(-0.081,0.0641);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ABD25D").s().p("ADNBtIhIgVIiFg9IhlgFIgsgKIgZgKIgVgMIgUgRIgNgOIgQgZIgOgeIAogVIASACIBHANICSAGIAVgVIDWAVIAADWg");
	this.shape_41.setTransform(0,0.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Aj+hhIApgUIBZAOICSAGIAVgUIDVAUIAADWIgygJIhJgVIiEg9IhlgFIgtgJIgYgKIgWgMIgUgRIgMgOIgQgZg");
	this.shape_42.setTransform(-0.081,0.0641);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF1000").s().p("ADNBtIhIgVIiFg9IhlgFIgsgKIgZgKIgVgMIgUgRIgNgOIgQgZIgOgeIAogVIBZAPICSAGIAVgVIDWAVIAADWg");
	this.shape_43.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-407,606.9,532.5);


(lib.doxhicho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape.setTransform(497.4,69.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_1.setTransform(474.625,69.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgHg");
	this.shape_2.setTransform(453.825,69.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAIAUABQAUgBAMgIQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_3.setTransform(323.825,69.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAIAUABQAUgBAMgIQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_4.setTransform(301.375,69.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag1BzQgYgHgRgNIAWgpQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_5.setTransform(279.775,70.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_6.setTransform(497.725,-42.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_7.setTransform(475.85,-42.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_8.setTransform(453.275,-42.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_9.setTransform(324.675,-43.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_10.setTransform(304.475,-43.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_11.setTransform(284.175,-43.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_12.setTransform(506.575,-155.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgnAPgeQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_13.setTransform(486.675,-155.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgJQAFgKAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_14.setTransform(465.025,-155.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_15.setTransform(451.025,-144.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_16.setTransform(438.575,-155.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgIAAgPQAAgQgMgIQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_17.setTransform(337.075,-155.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAglANgcQANgcAXgOQAXgPAdAAQAdAAAXAPQAYAOAMAcQAOAcAAAlQAAAngOAbQgMAcgYAOQgXAPgdAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANASQANAUAUgBQAWABAMgUQAMgSAAgnQAAgmgMgTQgMgSgWgBQgUABgNASg");
	this.shape_18.setTransform(315.7,-155.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_19.setTransform(293.425,-155.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_20.setTransform(279.575,-144.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_21.setTransform(267.125,-155.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape_22.setTransform(431.775,-274.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_23.setTransform(410.075,-274.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgIAAgPQAAgQgMgIQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_24.setTransform(388.525,-274.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_25.setTransform(374.275,-263.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgKQAFgLAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAWIg2A0IBlAAIAAAtg");
	this.shape_26.setTransform(359.325,-274.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_27.setTransform(480.425,-411.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AA2B3IAAhiIhrAAIAABiIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_28.setTransform(452.325,-411.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgyBrQgdgQgRgbQgRgcAAgkQAAgiARgcQARgcAdgQQAegQAkAAQAeAAAaAKQAZAMAQAUIgjAgQgYgbgjAAQgWAAgRAJQgRAKgLARQgJASAAAVQAAAWAJARQALASARAJQARAKAWAAQAjAAAYgcIAjAhQgRAUgZALQgZALgfAAQgjAAgegQg");
	this.shape_29.setTransform(426.45,-411.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_30.setTransform(408.175,-411.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AA2B3IAAhiIhrAAIAABiIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_31.setTransform(388.875,-411.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AA5B3Ig5hSIg4BSIg/AAIBYh4IhUh1IA/AAIA1BNIA2hNIA8AAIhTBzIBYB6g");
	this.shape_32.setTransform(362.975,-411.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_33.setTransform(336.525,-411.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAPAQAcQARAbAAAiQAAAkgRAbQgQAbgeAOQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjAAIgyAAg");
	this.shape_34.setTransform(308.825,-411.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_35.setTransform(393.325,-99.025);
	this.shape_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AoEgeIgSglIgSgcIgJgLIgTgUIhYhDIgVgVIAEgJIAXgfIAZgbICBhmIAigkICjAAIATAoIASAXIAMANIAOALIAWANIAYAKIAsAJIBnAFICnBJIBXASIB5BuIASAOIATALIAMAFIAOADIBZAtIA3AoIAgAiIAbAmIAdA3IBLDjIibAJIhKAMIhOAUIi4gpIiOhoIg9gzIjEiSIhcg0IhggkIhMgQg");
	this.shape_36.setTransform(0.0336,0.0072);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ABD25D").s().p("ADHF6IiOhnIg9g0IjDiSIhdg0IhggkIhMgQIgzgCIgSglIgSgcIgKgMIgTgUIhXhDIgWgUIAFgJIAWggIAZgbICBhlIAigkICjAAIATAnIASAYIANAMIANALIAWANIAYAKIAsAKIBnAFICnBJIBXASIB6BuIARANIAUAMIALAEIAOAEIBZAsIA3AoIAgAjIAbAlIAdA3IBLDjIibAJIhKAMIhOAUg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AoEgeIgSglIgSgcIgcgfIhYhDIgVgVIAEgJIAXgfIAZgbICBhmIAigkICjAAIATAoIASAXIAaAYIAWANIAYAKIAsAJIBnAFICnBJIBXASIB5BuIASAOIATALIAaAIIBZAtIA3AoIAgAiIAbAmIAdA3IBLDjIibAJIhKAMIhOAUIi4gpIiOhoIg9gzIjEiSIhcg0IhggkIhMgQg");
	this.shape_38.setTransform(0.0336,0.0072);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF1000").s().p("ADHF6IiOhnIg9g0IjDiSIhdg0IhggkIhMgQIgzgCIgSglIgSgcIgdggIhXhDIgWgUIAFgJIAWggIAZgbICBhlIAigkICjAAIATAnIASAYIAaAXIAWANIAYAKIAsAKIBnAFICnBJIBXASIB6BuIARANIAUAMIAZAIIBZAsIA3AoIAgAjIAbAlIAdA3IBLDjIibAJIhKAMIhOAUg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-439.7,646.4,532.7);


(lib.dexbajo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape.setTransform(434.325,79.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_1.setTransform(412.675,79.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgGg");
	this.shape_2.setTransform(390.775,79.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_3.setTransform(262.525,79.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_4.setTransform(241.425,79.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_5.setTransform(220.275,79.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAkIhYDJg");
	this.shape_6.setTransform(434.875,-32.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahJQgKAHAAAOQAAAOAKAIQAKAHAQAAQARAAAKgHQAKgIAAgOQAAgOgKgHQgKgIgRAAQgQAAgKAIg");
	this.shape_7.setTransform(413.225,-32.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAaQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_8.setTransform(391.275,-32.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAglANgcQANgcAXgOQAXgPAdAAQAdAAAYAPQAWAOAOAcQANAcAAAlQAAAngNAbQgOAcgWAOQgYAPgdAAQgdAAgXgPgAghg5QgNATABAmQAAAnAMASQAMAUAVgBQAVABANgUQANgSAAgnQAAgmgNgTQgNgSgVgBQgVABgMASg");
	this.shape_9.setTransform(262.55,-34.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgQgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_10.setTransform(239.875,-34.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_11.setTransform(218.625,-34.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAYAPQAXAOANAcQANAbAAAmQAAAmgNAcQgNAcgXAPQgYAOgdAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMASQAMATAVAAQAWAAAMgTQAMgSAAgnQAAgmgMgTQgMgTgWAAQgVAAgMATg");
	this.shape_12.setTransform(435.65,-144.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_13.setTransform(412.75,-144.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_14.setTransform(389.975,-144.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_15.setTransform(262.175,-144.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_16.setTransform(242.025,-144.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_17.setTransform(221.925,-144.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_18.setTransform(367.175,-265.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_19.setTransform(347.075,-265.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhnCOIA+AAIAAgsIA1AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_20.setTransform(325.3,-265.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_21.setTransform(308.775,-254.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_22.setTransform(296.325,-265.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_23.setTransform(452.875,-401.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgwBwQgTgJgNgRIAegkQATAaAZAAQAhAAAAgnIAAhxIhTAAIAAgsICKAAIAACZQgBAsgVAWQgWAWgpAAQgYAAgVgJg");
	this.shape_24.setTransform(427.7,-401.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_25.setTransform(407.1,-401.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhsB3IAAjtIBzAAQAsAAAXAQQAXARAAAdQAAARgIAOQgIANgPAIQAUAFAMAQQALAPAAAWQAAAfgYARQgYARgvAAgAg1BNIA/AAQAWABALgIQALgHAAgOQAAgegsAAIg/AAgAg1gVIA1AAQAVABAKgIQALgGAAgPQAAgOgLgGQgKgIgVABIg1AAg");
	this.shape_26.setTransform(381.775,-401.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgvCZIAAjtIA2AAIAADtgAgyhnIAtgxIA4AAIg9Axg");
	this.shape_27.setTransform(354.95,-405.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_28.setTransform(333.575,-401.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_29.setTransform(306.85,-401.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgyBrQgdgPgRgcQgRgdAAgjQAAgiARgdQARgcAdgPQAegQAkAAQAeAAAaAKQAYALASAVIgkAgQgYgbgjAAQgWAAgRAJQgSAKgJARQgKASAAAVQAAAWAKASQAJAQASALQARAJAWAAQAjAAAYgcIAkAgQgSAWgZAKQgZALgfAAQgjAAgegQg");
	this.shape_30.setTransform(281.65,-401.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AA5B3Ig5hSIg4BSIg/AAIBYh4IhUh1IA/AAIA1BNIA2hNIA8AAIhTBzIBYB6g");
	this.shape_31.setTransform(256.775,-401.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_32.setTransform(233.875,-401.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAPAQAbQARAaAAAjQAAAkgRAaQgQAcgeAOQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjgBIgyAAg");
	this.shape_33.setTransform(208.525,-401.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_34.setTransform(329.025,-91.525);
	this.shape_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("ACyHBIgJhWIgni/Ig5igIg+h1IhOhkIgugpIgygiIg3gZIg8gQIhAgGIAAhRIBWgdIBOgNIA8ABIA6AKIA5ARICGBBIAQAJIgNBkIAAAYIAJB4IAcBzIApBxICBEIIgOAMIgJAFg");
	this.shape_35.setTransform(0.0579,0.0796);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ABD25D").s().p("ACqFsIgoi/Ig4igIg/h1IhNhlIgugoIgygjIg3gZIg8gQIhAgFIAAhRIBVgdIBPgNIA8ABIA6AJIA4ASICHBBIAPAJIgMBkIAAAYIAJB4IAcBzIApBxICBEHIgOANIgJAFIiMAsg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF1000").s().p("ACqFsIgoi/Ig4igIg/h1IhNhlIgugoIgygjIg3gZIg8gQIhAgFIAAhRIBVgdIBPgNIA8ABIA6AJIA4ASICHBBIAPAJIgMBkIAAAYIAJB4IAcBzIApBxICBEHIgOANIgJAFIiMAsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).to({state:[{t:this.shape_37},{t:this.shape_35}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-429.6,550.2,532);


(lib.dexalto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape.setTransform(392.125,90.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_1.setTransform(371.575,90.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_2.setTransform(350.575,90.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_3.setTransform(221.025,89.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAglANgcQANgcAXgOQAXgPAdAAQAdAAAYAPQAXAOAMAcQAOAcAAAlQAAAngOAbQgMAcgXAOQgYAPgdAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANASQANAUAUgBQAWABAMgUQAMgSAAgnQAAgmgMgTQgMgSgWgBQgUABgNASg");
	this.shape_4.setTransform(199.05,89.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_5.setTransform(176.775,89.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAbAAAmQAAAngOAbQgNAcgXAOQgWAPgeAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQANASAUABQAWgBAMgSQANgTAAgnQAAgmgNgTQgMgSgWAAQgUAAgNASg");
	this.shape_6.setTransform(389.25,-23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_7.setTransform(369.725,-23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_8.setTransform(353.625,-23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA6AAIhmCOIA+AAIAAgsIA1AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_9.setTransform(218.55,-22.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_10.setTransform(198.475,-22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_11.setTransform(182.375,-22.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape_12.setTransform(393.8,-134.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg2IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_13.setTransform(370.975,-134.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_14.setTransform(351.175,-134.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAjIhYDKg");
	this.shape_15.setTransform(222.775,-135.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_16.setTransform(201.875,-135.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgIAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWALQgWAKggAAQgZAAgZgHg");
	this.shape_17.setTransform(180.325,-134.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_18.setTransform(320.675,-256.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAeAAAWAPQAXAOANAcQAOAbAAAmQAAAngOAbQgNAcgXAPQgWAOgeAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANASQANAUAUgBQAWABAMgUQANgSAAgnQAAgmgNgTQgMgSgWgBQgUABgNASg");
	this.shape_19.setTransform(303.75,-256.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_20.setTransform(284.225,-256.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_21.setTransform(274.425,-244.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_22.setTransform(261.975,-256.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_23.setTransform(409.975,-391.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_24.setTransform(385.1,-391.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_25.setTransform(365.575,-391.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_26.setTransform(341.05,-391.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgwCZIAAjtIA3AAIAADtgAgyhnIAtgxIA4AAIg9Axg");
	this.shape_27.setTransform(314.9,-395.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_28.setTransform(293.525,-391.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_29.setTransform(266.8,-391.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgyBrQgdgPgRgcQgRgcAAgkQAAgjARgbQARgdAdgPQAegQAkAAQAeAAAaAKQAYAMASAUIgkAgQgYgbgkAAQgVAAgRAJQgSAKgJARQgKASAAAVQAAAWAKARQAJARASAKQARAKAVAAQAkAAAYgcIAkAhQgSAUgZALQgZALgfAAQgjAAgegQg");
	this.shape_30.setTransform(241.6,-391.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AA5B3Ig5hSIg4BSIg/AAIBYh4IhUh1IA/AAIA1BNIA2hNIA8AAIhTBzIBYB6g");
	this.shape_31.setTransform(216.725,-391.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_32.setTransform(193.825,-391.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAQAQAbQARAaAAAjQAAAkgRAbQgQAbgeAOQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjgBIgyAAg");
	this.shape_33.setTransform(168.475,-391.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_34.setTransform(290.525,-81.925);
	this.shape_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("Ag7HqIiBkHIgihbIgjiJIgJh4IAAgZIANhjIC3iLIBlg3IA/gXIBugWIA/gFIgECaIADGMIgEAoIgbCWIgYBCIghA6IgqAwIgZAUIgcAQIgeANIgjAKg");
	this.shape_35.setTransform(0.032,0.0183);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ABD25D").s().p("Ai8DjIgihbIgjiJIgJh4IAAgZIANhjIC3iLIBlg3IA/gXIBugWIA/gFIgECaIADGMIgEAoIgbCWIgYBCIghA6IgqAwIgZAUIgcAQIgeANIgjAKIhNAIg");
	this.shape_36.setTransform(0.025,0.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF1000").s().p("Ai8DjIgihbIgjiJIgJh4IAAgZIANhjIC3iLIBlg3IA/gXIBugWIA/gFIgECaIADGMIgEAoIgbCWIgYBCIghA6IgqAwIgZAUIgcAQIgeANIgjAKIhNAIg");
	this.shape_37.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).to({state:[{t:this.shape_37},{t:this.shape_35}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.7,-419.6,499.7,533);


(lib.denjhi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape.setTransform(467.15,94.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAXIg2AzIBlAAIAAAtg");
	this.shape_1.setTransform(444.575,93.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_2.setTransform(424.275,94.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWALQgWAKggAAQgZAAgZgHg");
	this.shape_3.setTransform(294.975,94.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_4.setTransform(274.425,94.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_5.setTransform(254.275,94.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAIAQAAQARAAAKgIQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_6.setTransform(468.375,-18.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_7.setTransform(446.425,-18.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_8.setTransform(426.275,-18.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_9.setTransform(294.475,-17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAaQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_10.setTransform(273.225,-17.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAaQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_11.setTransform(253.075,-17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgNAFgLQAFgJAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape_12.setTransform(469.425,-129.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAIAQAAQARAAAKgIQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_13.setTransform(448.625,-129.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_14.setTransform(426.925,-129.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAaQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_15.setTransform(296.725,-128.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahJQgKAHAAAOQAAAOAKAIQAKAHAQAAQARAAAKgHQAKgIAAgOQAAgOgKgHQgKgIgRAAQgQAAgKAIg");
	this.shape_16.setTransform(276.075,-128.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgJQALgKAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_17.setTransform(254.375,-128.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgIAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWALQgWAKggAAQgZAAgZgHg");
	this.shape_18.setTransform(397.825,-250.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_19.setTransform(377.525,-250.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_20.setTransform(355.625,-250.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_21.setTransform(341.775,-239.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_22.setTransform(329.325,-250.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_23.setTransform(427.275,-387.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AA2B3IAAhhIhrAAIAABhIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_24.setTransform(407.975,-387.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgvBwQgVgJgNgRIAfgkQATAaAZAAQAhAAAAgnIAAhxIhSAAIAAgsICIAAIAACZQABAsgWAWQgWAWgpAAQgYAAgUgJg");
	this.shape_25.setTransform(383.45,-386.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_26.setTransform(362.125,-387.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_27.setTransform(337.625,-387.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAOAQAbQARAbAAAjQAAAkgRAaQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_28.setTransform(312.275,-387.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_29.setTransform(364.625,-77.675);
	this.shape_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AhcAoIAAjWIBTgKIAAAKIAmBbIApB9IAVCNIgNgDIgMgFIgUgLIgRgOg");
	this.shape_30.setTransform(0.0541,0.055);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ABD25D").s().p("ABPC1IgMgFIgUgLIgRgOIh5huIAAjWIBSgKIAAAKIAnBaIAoB9IAWCOg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AhcAoIAAjWIBTgKIAAAKIAmBbIApB9IAVCNIgZgIIgUgLIgRgOg");
	this.shape_32.setTransform(0.0573,0.0763);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF1000").s().p("ABDCwIgUgLIgRgOIh5huIAAjWIBSgKIAAAKIAnBaIAoB9IAWCOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-414.9,559.4000000000001,532.4);


(lib.dedeni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape.setTransform(629.025,391.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_1.setTransform(613.275,391.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgGg");
	this.shape_2.setTransform(457.675,390.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIAzAAIAAArIAoAAIAAAtIgoAAIAAAyg");
	this.shape_3.setTransform(436.5,390.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_4.setTransform(629.475,279.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_5.setTransform(613.425,279.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_6.setTransform(457.475,279.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_7.setTransform(436.275,279.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLARgWALQgWALggAAQgZAAgZgGg");
	this.shape_8.setTransform(636.725,167.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLARgWALQgWALggAAQgZAAgZgGg");
	this.shape_9.setTransform(616.525,167.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_10.setTransform(598.725,167.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgTAJgOQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAOAAATQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAJAUAAQAUAAAMgJQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQAAQARAAAKgHQAKgIAAgNQAAgOgKgJQgKgHgRAAQgQAAgKAHg");
	this.shape_11.setTransform(463.975,167.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_12.setTransform(442.025,167.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_13.setTransform(424.625,167.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_14.setTransform(558.425,47.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgSAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape_15.setTransform(537.875,47.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgNAFgLQAFgJAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape_16.setTransform(516.875,46.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag4BzQgagIgQgLIASgqQAQALAVAHQAVAHAVAAQAWAAAMgHQALgHAAgMQAAgIgGgFQgHgHgKgDIgbgHQgcgHgRgGQgRgGgNgOQgMgOAAgYQAAgVALgQQALgSAXgJQAWgKAgAAQAXAAAVAFQAXAGAPAKIgRAqQgggTgiAAQgWAAgLAHQgLAIAAAMQAAAMANAGQANAHAZAFQAbAHASAGQARAGAMANQANAOAAAZQAAAUgMARQgLARgXAJQgWAKggAAQgcAAgbgIg");
	this.shape_17.setTransform(687.95,-89.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_18.setTransform(666.325,-89.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AAuB3IguhCIgBAAIgwAAIAABCIg4AAIAAjtIBoAAQAfAAAXAKQAXALANATQAMAUAAAbQAAAagMASQgNAUgYAKIA2BMgAgxAJIAsAAQAYAAAOgKQANgLgBgTQABgVgNgLQgOgKgYAAIgsAAg");
	this.shape_19.setTransform(642.65,-89.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKASQAKARARAKQARAJAUAAQAVAAARgJQARgKAJgRQAKgSAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_20.setTransform(614.975,-89.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_21.setTransform(591.575,-89.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKASQAKARARAKQARAJAUAAQAVAAARgJQARgKAJgRQAKgSAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_22.setTransform(565.725,-89.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAPAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_23.setTransform(538.025,-89.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_24.setTransform(508.075,-89.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_25.setTransform(488.775,-89.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_26.setTransform(464.275,-89.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAPAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_27.setTransform(438.925,-89.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_28.setTransform(413.375,-89.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAPAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_29.setTransform(388.025,-89.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_30.setTransform(535.025,218.525);
	this.shape_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AlFDqIgVAAIgVi3IBDgRIA6gaIAWgOIAfgfIAbgiIAvgCIApgIIANgDIAlgOIArgYIAxgnIB/iHIARAGIAQAJIAPANIAVAWIApBDIA/CgIgDAKIgYAwIhnCKIghAzIgbA4IgEAMIgPgFIgqgIg");
	this.shape_31.setTransform(-0.0066,0.0307);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ABD25D").s().p("ACeEjIgpgIIm6gwIgWAAIgUi4IBCgRIA7gZIAVgPIAggeIAbgiIAvgDIApgHIANgEIAkgNIAsgZIAxgmIB+iHIARAGIAQAJIAQAMIAUAWIAqBDIA/CgIgEALIgXAvIhnCLIghAyIgbA4IgEANg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF1000").s().p("ACeEjIgpgIIm6gwIgWAAIgUi4IBCgRIA7gZIAVgPIAggeIAbgiIAvgDIApgHIANgEIAkgNIAsgZIAxgmIB+iHIARAGIAQAJIAQAMIAUAWIAqBDIA/CgIgEALIgXAvIhnCLIghAyIgbA4IgEANg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).to({state:[{t:this.shape_33},{t:this.shape_31}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-117.6,758.8,531.9);


(lib.danxho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag1ByQgYgGgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYAUQAYASAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape.setTransform(515.225,23.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgKQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_1.setTransform(494.275,23.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAXIg2AzIBlAAIAAAtg");
	this.shape_2.setTransform(473.275,23.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_3.setTransform(344.025,23.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_4.setTransform(322.475,23.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgJQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_5.setTransform(301.475,22.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape_6.setTransform(510.925,-87.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_7.setTransform(491.725,-87.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_8.setTransform(475.625,-87.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_9.setTransform(341.975,-86.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgOAFgJQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_10.setTransform(322.075,-87.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_11.setTransform(301.775,-86.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_12.setTransform(514.225,-200.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_13.setTransform(498.125,-200.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_14.setTransform(478.225,-200.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAIAQAAQARAAAKgIQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_15.setTransform(344.875,-200.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_16.setTransform(323.175,-200.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_17.setTransform(301.525,-200.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgRQARgSACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAfQAcAdAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAKQALAJATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_18.setTransform(446.625,-320.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgRQARgSACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAfQAcAdAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAKQALAJATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_19.setTransform(424.975,-320.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgPgKgIQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_20.setTransform(403.975,-320.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAGIgHAUIgUAxg");
	this.shape_21.setTransform(389.975,-309.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_22.setTransform(377.525,-320.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKASQAKARARAKQARAJAUAAQAVAAARgJQARgKAJgRQAKgSAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_23.setTransform(476.675,-457.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AA2B3IAAhhIhrAAIAABhIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_24.setTransform(448.575,-457.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AA5B3Ig5hTIg4BTIg/AAIBYh4IhUh1IA/AAIA1BNIA2hNIA8AAIhTBzIBYB6g");
	this.shape_25.setTransform(422.675,-457.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_26.setTransform(396.825,-457.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBrDtgAgmAaIBLAAIglhag");
	this.shape_27.setTransform(370.1,-457.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAOAQAbQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_28.setTransform(343.725,-457.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AEydqIAAleIROAAIAAFegA2hdqIAAleIROAAIAAFegA2hMAIAAleIROAAIAAFegAFULnIAAleIROAAIAAFegA2hkZIAAnFIROAAIAAHFgAFUluIAAleIROAAIAAFegAoO2kIAAnFIRNAAIAAHFg");
	this.shape_29.setTransform(413.025,-145.225);
	this.shape_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("ADXHmIgcgXIgsgZIhBgWIgigHIjjgWIhEgMIhAgWIAhiUIAGgwIgCgRIgGgOIgFgGIgFgFIgHgEIgSgHIgngFIi2AIIhwhSIAYgoIDmknIAxhTIAVg/IADgdIAzADIBMAQIAZAHIBfAqIBFAoIDCCSIA/AzICNBoIC4ApIAQAyIAGAPIA8BYIgCAmIgIAlIgWA9Ig0BcIhjCMg");
	this.shape_30.setTransform(-0.0503,0.0115);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ABD25D").s().p("ADWHmIgcgXIgsgZIhBgWIgigHIjjgWIhEgMIhAgWIAhiUIAGgwIgCgRIgGgOIgFgGIgFgFIgHgEIgSgHIgngFIi2AIIhwhSIAYgoIDmknIAxhTIAVg/IADgdIAzADIBMAQIAZAHIBfAqIBFAoIDCCSIA/AzICNBoIC4ApIAQAyIAGAPIA8BYIgCAmIgIAlIgWA9Ig0BcIhjCMg");
	this.shape_31.setTransform(0.025,0.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF1000").s().p("ADWHmIgcgXIgsgZIhBgWIgigHIjjgWIhEgMIhAgWIAhiUIAGgwIgCgRIgGgOIgFgGIgFgFIgHgEIgSgHIgngFIi2AIIhwhSIAYgoIDmknIAxhTIAVg/IADgdIAzADIBMAQIAZAHIBfAqIBFAoIDCCSIA/AzICNBoIC4ApIAQAyIAGAPIA8BYIgCAmIgIAlIgWA9Ig0BcIhjCMg");
	this.shape_32.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_32},{t:this.shape_30}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.4,-485.3,662,534.9);


(lib.dcuauhtemoc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag1BzQgYgHgRgNIAWgpQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape.setTransform(594.975,98.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAIAUABQAUgBAMgIQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQAAQARAAAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_1.setTransform(573.925,98.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_2.setTransform(554.725,98.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_3.setTransform(423.825,99.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgSAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape_4.setTransform(401.525,99.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_5.setTransform(383.025,99.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_6.setTransform(593.225,-13.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_7.setTransform(571.575,-13.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_8.setTransform(553.075,-13.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAYAPQAWAOAOAcQANAbAAAmQAAAngNAbQgOAcgWAPQgYAOgdAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMASQAMAUAVgBQAWABAMgUQAMgSAAgnQAAgmgMgTQgMgTgWAAQgVAAgMATg");
	this.shape_9.setTransform(425.65,-13.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAXAPQAYAOAMAcQAOAbAAAmQAAAngOAbQgMAcgYAPQgXAOgdAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANASQANAUAUgBQAWABAMgUQAMgSAAgnQAAgmgMgTQgMgTgWAAQgUAAgNATg");
	this.shape_10.setTransform(402.55,-13.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgOAFgJQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_11.setTransform(380.525,-13.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_12.setTransform(596.975,-126.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAIAQAAQARAAAKgIQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_13.setTransform(576.325,-126.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_14.setTransform(554.375,-126.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag1BzQgYgHgRgNIAWgpQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_15.setTransform(421.625,-125.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_16.setTransform(403.825,-125.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_17.setTransform(387.1,-125.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahJQgKAHAAAOQAAAOAKAIQAKAHAQAAQARAAAKgHQAKgIAAgOQAAgOgKgHQgKgIgRAAQgQAAgKAIg");
	this.shape_18.setTransform(517.125,-244.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_19.setTransform(494.775,-244.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAkIhYDJg");
	this.shape_20.setTransform(473.575,-244.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgxBrQgegPgRgdQgRgcABgjQgBgjARgcQARgbAegRQAdgPAjAAQAgAAAZALQAYAKARAVIgjAhQgYgcgjAAQgWAAgRAKQgSAJgKASQgJARAAAVQAAAWAJASQAKAQASALQARAJAWAAQAjAAAYgcIAjAgQgQAVgaALQgZALgfAAQgjAAgdgQg");
	this.shape_21.setTransform(610.3,-351.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_22.setTransform(583.275,-351.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_23.setTransform(552.675,-351.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhbCZIAAjtICzAAIAAAtIh8AAIAAAyIBtAAIAAArIhtAAIAAA3ICAAAIAAAsgAgghnIAtgxIA5AAIg9Axg");
	this.shape_24.setTransform(525.675,-354.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDOAAIAAAtIhNAAIAADAg");
	this.shape_25.setTransform(503.15,-351.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AA2B3IAAhhIhrAAIAABhIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_26.setTransform(478.925,-351.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgQQAOgPAAggIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_27.setTransform(451.775,-351);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_28.setTransform(425.4,-351.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgQQAOgPAAggIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_29.setTransform(398.925,-351);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgxBrQgegPgRgdQgQgcAAgjQAAgjAQgcQARgbAegRQAdgPAjAAQAfAAAZALQAaAKARAVIgkAhQgYgcgkAAQgVAAgRAKQgSAJgKASQgJARAAAVQAAAWAJASQAKAQASALQARAJAVAAQAkAAAYgcIAkAgQgRAVgaALQgZALgfAAQgjAAgdgQg");
	this.shape_30.setTransform(373.4,-351.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_31.setTransform(629.975,-383.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAPAQAcQARAbAAAiQAAAkgRAbQgQAbgeAOQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjAAIgyAAg");
	this.shape_32.setTransform(604.625,-383.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_33.setTransform(565.925,-383.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_34.setTransform(537.825,-383.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AhnB3IAAgkICBicIh/AAIAAgtIDIAAIAAAkIiBCcICGAAIAAAtg");
	this.shape_35.setTransform(513,-383.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBqjtIA2AAIBrDtgAglAaIBKAAIglhag");
	this.shape_36.setTransform(488.3,-383.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AAvB3IguhCIgCAAIgwAAIAABCIg3AAIAAjtIBnAAQAfAAAWALQAYAKAMATQANAUAAAaQAAAbgNASQgNATgXALIA1BMgAgxAJIAsAAQAYAAANgKQAOgLAAgUQAAgTgOgLQgNgLgYAAIgsAAg");
	this.shape_37.setTransform(463.6,-383.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgPQAOgQAAghIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_38.setTransform(436.825,-382.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAPAQAcQARAbAAAiQAAAkgRAbQgQAbgeAOQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjAAIgyAAg");
	this.shape_39.setTransform(410.125,-383.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_40.setTransform(376.725,-383.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_41.setTransform(354.425,-383.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_42.setTransform(495.225,-71.575);
	this.shape_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AhXCaIgdi3IAdh8IA6AMIAeAKIAaANIARAMIAGAEIAUAUIAlA4IAKASIgKBHIgCAIIgOAiIgYAng");
	this.shape_43.setTransform(0.0044,-0.0293);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ABD25D").s().p("Ah0gdIAdh8IA6AMIAeAKIAaANIARAMIAGAEIAUAUIAlA4IAKASIgKBHIgCAIIgOAhIgYAoIiaAKg");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF1000").s().p("Ah0gdIAdh8IA6AMIAeAKIAaANIARAMIAGAEIAUAUIAlA4IAKASIgKBHIgCAIIgOAhIgYAoIiaAKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43}]}).to({state:[{t:this.shape_45},{t:this.shape_43}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-410.9,687.5,533.4);


(lib.coscomate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgIAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWALQgWAKggAAQgZAAgZgHg");
	this.shape.setTransform(443.525,71.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_1.setTransform(423.225,71);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_2.setTransform(400.7,71);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgcAAgmQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAXAOQAYAPAMAcQAOAbAAAmQAAAmgOAcQgMAcgYAOQgXAPgdAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANASQANAUAUAAQAWAAAMgUQAMgSAAgnQAAgmgMgTQgMgSgWAAQgUAAgNASg");
	this.shape_3.setTransform(272.5,70.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_4.setTransform(250.475,70.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBviWIA7AAIhoCOIA/AAIAAgrIA0AAIAAArIAoAAIAAAtIgoAAIAAAyg");
	this.shape_5.setTransform(227.95,70.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape_6.setTransform(443.825,-40.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_7.setTransform(421.925,-40.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape_8.setTransform(400.15,-40.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgHg");
	this.shape_9.setTransform(272.325,-40.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_10.setTransform(251.675,-40.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_11.setTransform(229.1,-40.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_12.setTransform(441.925,-152.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAXIg2AzIBlAAIAAAtg");
	this.shape_13.setTransform(421.025,-152.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape_14.setTransform(400.225,-152.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_15.setTransform(269.925,-153.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_16.setTransform(249.825,-153.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAIAUABQAUgBAMgIQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQAAQARAAAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_17.setTransform(228.175,-153.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAbAAAmQAAAngOAbQgNAcgXAOQgWAPgeAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQANATAUAAQAWAAAMgTQANgTAAgnQAAgmgNgTQgMgSgWAAQgUAAgNASg");
	this.shape_18.setTransform(374.85,-272.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAYAOQAWAPAOAcQANAbAAAmQAAAngNAbQgOAcgWAOQgYAPgdAAQgdAAgXgPgAghg5QgMATAAAmQAAAnAMATQAMATAVAAQAVAAANgTQANgTgBgnQABgmgNgTQgNgSgVAAQgVAAgMASg");
	this.shape_19.setTransform(351.75,-272.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_20.setTransform(329.525,-272.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAGIgHAUIgUAxg");
	this.shape_21.setTransform(314.675,-261.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_22.setTransform(302.225,-272.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_23.setTransform(426.125,-377.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("Ag4B0QgagJgQgLIATgqQAPALAVAHQAVAHAVAAQAXAAALgHQALgHAAgMQAAgIgGgGQgHgGgKgDIgbgHQgcgHgRgGQgRgHgNgNQgMgOAAgYQAAgVALgRQALgRAXgKQAWgJAgAAQAXAAAVAFQAXAFAPALIgRAqQgggTgiAAQgWAAgLAHQgKAIgBAMQABANANAFQAMAHAZAFQAcAHARAGQARAGAMANQANAOAAAZQAAATgMASQgLAQgXAKQgWAKggAAQgcAAgbgHg");
	this.shape_24.setTransform(400.95,-377.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_25.setTransform(379.325,-377.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AAuB3IguhCIgBAAIgwAAIAABCIg4AAIAAjtIBoAAQAfAAAWAKQAYALANATQAMAUAAAaQAAAbgMASQgOATgXALIA2BMgAgxAJIAtAAQAXAAAOgKQANgLgBgUQABgTgNgMQgOgKgXAAIgtAAg");
	this.shape_26.setTransform(355.65,-377.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgzBrQgdgQgRgcQgRgcAAgjQAAgjARgcQARgcAegQQAdgPAkAAQAgAAAaALQAZAKARAUIgjAhQgagbgjAAQgXAAgRAKQgSAJgJASQgLAQABAWQgBAWALARQAJASASAJQARAKAWAAQAYAAASgKIAAhEIAzAAIAABfQgTAPgaAHQgaAIgaAAQgkAAgdgQg");
	this.shape_27.setTransform(328.95,-377.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_28.setTransform(301.775,-377.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AAvB3IgvhCIgBAAIgwAAIAABCIg3AAIAAjtIBnAAQAfAAAWAKQAYALAMATQANAUAAAaQAAAbgNASQgNATgXALIA1BMgAgxAJIAtAAQAYAAANgKQAMgLAAgUQAAgTgMgMQgNgKgYAAIgtAAg");
	this.shape_29.setTransform(275.75,-377.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhmB3IAAjtIBmAAQAgAAAXAKQAXALANATQAMAUAAAaQAAAbgMASQgNAUgXAKQgXAKggAAIgvAAIAABCgAgvAIIAtAAQAYAAANgJQANgLAAgUQAAgTgNgMQgNgKgYAAIgtAAg");
	this.shape_30.setTransform(250.675,-377.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_31.setTransform(486.025,-409.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_32.setTransform(463.725,-409.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAQAQAbQARAaAAAjQAAAkgRAbQgQAbgeAOQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjgBIgyAAg");
	this.shape_33.setTransform(438.375,-409.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_34.setTransform(403.225,-409.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AgbB3IAAjAIhLAAIAAgtIDNAAIAAAtIhLAAIAADAg");
	this.shape_35.setTransform(380.7,-409.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_36.setTransform(357.2,-409.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_37.setTransform(327.925,-409.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_38.setTransform(297.375,-409.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AgyBrQgdgPgRgcQgRgcAAgkQAAgjARgbQARgdAdgPQAegQAkAAQAeAAAaAKQAYAMASAUIgkAgQgYgbgkAAQgVAAgRAJQgSAKgJARQgKASAAAVQAAAWAKARQAJARASAKQARAKAVAAQAkAAAYgcIAkAhQgSAUgZALQgZALgfAAQgjAAgegQg");
	this.shape_39.setTransform(270.85,-409.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("Ag3BzQgbgHgQgNIATgpQAPALAVAHQAVAHAVAAQAXAAALgHQALgHAAgLQAAgJgGgGQgHgFgLgEIgbgIQgbgFgRgHQgSgGgMgOQgMgOAAgYQAAgVALgRQALgQAXgLQAXgJAfAAQAXAAAVAGQAWAEARALIgRAqQghgTgiAAQgWAAgKAIQgMAHAAANQAAALAOAHQAMAFAZAGQAcAHAQAGQASAHAMANQANANAAAYQAAAVgLAQQgMARgWAKQgXAKggAAQgdAAgZgIg");
	this.shape_40.setTransform(247.35,-409.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKARQAKARARAKQARAKAUAAQAVAAARgKQARgKAJgRQAKgRAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_41.setTransform(222.175,-409.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AgxBrQgegPgRgcQgQgcAAgkQAAgjAQgbQARgdAegPQAdgQAjAAQAfAAAZAKQAaAMAQAUIgjAgQgYgbgkAAQgVAAgRAJQgSAKgJARQgKASAAAVQAAAWAKARQAJARASAKQARAKAVAAQAkAAAYgcIAjAhQgQAUgaALQgZALgfAAQgjAAgdgQg");
	this.shape_42.setTransform(195.65,-409.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_43.setTransform(338.025,-98.475);
	this.shape_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("ACWGPIhLjjIgdg3Igvg9IgLgLIg3gpIhZgsIgWiNIgph+IgnhbIBAAGIA8AQIA3AZIAyAiIAtApIBPBlIA+B2IA5CfIAXBhIAQBdIAJBXIgdAPIgUAFg");
	this.shape_44.setTransform(-0.1053,-0.0368);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ABD25D").s().p("ABJCsIgdg3Igug9IgMgLIg2gqIhagrIgViOIgph+IgnhaIBAAGIA8AQIA2AZIAzAiIAtApIBOBkIA/B2IA4CgIAYBhIAPBdIAJBXIgcAOIgVAGIg/AAg");
	this.shape_45.setTransform(0.025,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF1000").s().p("ABJCsIgdg3Igug9IgMgLIg2gqIhagrIgViOIgph+IgnhaIBAAGIA8AQIA2AZIAzAiIAtApIBOBkIA/B2IA4CgIAYBhIAPBdIAJBXIgcAOIgVAGIg/AAg");
	this.shape_46.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44}]}).to({state:[{t:this.shape_46},{t:this.shape_44}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-437.6,549,531.7);


(lib.comunidad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgGg");
	this.shape.setTransform(571.725,220.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_1.setTransform(551.625,220.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_2.setTransform(533.225,220.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_3.setTransform(394.975,219.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_4.setTransform(373.125,219.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_5.setTransform(354.725,219.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_6.setTransform(576.575,107.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgOAFgJQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_7.setTransform(555.575,107.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_8.setTransform(535.275,107.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLARgWALQgWALggAAQgZAAgZgGg");
	this.shape_9.setTransform(397.275,107.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLARgWALQgWALggAAQgZAAgZgGg");
	this.shape_10.setTransform(377.075,107.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_11.setTransform(356.525,107.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAXAPQAYAOAMAcQAOAbAAAmQAAAngOAbQgMAcgYAPQgXAOgdAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANASQANAUAUgBQAWABAMgUQAMgSAAgnQAAgmgMgTQgMgSgWgBQgUABgNASg");
	this.shape_12.setTransform(578.4,-4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_13.setTransform(555.725,-4.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgJQALgKAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_14.setTransform(534.725,-4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahJQgKAHAAAOQAAAOAKAIQAKAHAQAAQARAAAKgHQAKgIAAgOQAAgOgKgHQgKgIgRAAQgQAAgKAIg");
	this.shape_15.setTransform(395.475,-4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_16.setTransform(376.275,-4.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAkIhYDJg");
	this.shape_17.setTransform(360.225,-4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_18.setTransform(503.075,-125.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAglANgcQANgcAXgPQAXgOAdAAQAdAAAXAOQAYAPAMAcQAOAcAAAlQAAAmgOAcQgMAcgYAPQgXAOgdAAQgdAAgXgOgAghg5QgMATgBAmQABAnAMATQANASAUAAQAWAAAMgSQAMgTAAgnQAAgmgMgTQgMgTgWAAQgUAAgNATg");
	this.shape_19.setTransform(480.3,-125.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_20.setTransform(457.4,-125.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_21.setTransform(440.875,-114.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_22.setTransform(428.425,-125.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAQAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjABIgyAAg");
	this.shape_23.setTransform(595.575,-261.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_24.setTransform(567.8,-261.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAOQAeAQAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjABIgyAAg");
	this.shape_25.setTransform(541.425,-261.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_26.setTransform(521.075,-261.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_27.setTransform(501.775,-261.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhOBdQgdgcAAg1IAAiEIA3AAIAACCQAABAA1AAQAZAAAOgPQAOgPAAgiIAAiCIA2AAIAACEQAAA1gcAcQgdAcgzAAQgyAAgcgcg");
	this.shape_28.setTransform(474.625,-261.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_29.setTransform(445.025,-261.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhBQgRAJgKASQgKARAAAVQAAAWAKARQAKASARAJQARAKAUAAQAVAAARgKQARgJAJgSQAKgRAAgWQAAgVgKgRQgJgSgRgJQgRgKgVAAQgUAAgRAKg");
	this.shape_30.setTransform(414.475,-261.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AgyBrQgdgQgRgcQgQgcgBgjQABgjAQgcQARgcAdgQQAegPAkAAQAeAAAaALQAYAKASAVIgkAhQgYgcgkAAQgVAAgRAKQgSAJgJASQgKARAAAVQAAAWAKARQAJASASAJQARAKAVAAQAkAAAYgcIAkAgQgSAWgZAKQgZALgfAAQgjAAgegQg");
	this.shape_31.setTransform(387.95,-261.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_32.setTransform(352.65,-261.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_33.setTransform(330.575,-261.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_34.setTransform(466.725,47.975);
	this.shape_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AlmDCIgdh+IgEgbIgGiDICPhoIA2ADIDjAxIBBAKIAxASIBRgyIAngPIAfgGIBBgBIApCwIgUASIgnAYIgvAUIiCAkIkYAhIgcABIgHAfg");
	this.shape_35.setTransform(0.0455,0.0632);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ABD25D").s().p("AmDBEIgEgbIgGiDICPhnIA2ADIDjAwIBBALIAxARIBRgxIAngQIAfgGIBBgBIApCxIgUARIgnAYIgvAVIiCAjIkYAhIgcABIgHAfIjNApg");
	this.shape_36.setTransform(0.025,0.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF1000").s().p("AmDBEIgEgbIgGiDICPhnIA2ADIDjAwIBBALIAxARIBRgxIAngQIAfgGIBBgBIApCxIgUARIgnAYIgvAVIiCAjIkYAhIgcABIgHAfIjNApg");
	this.shape_37.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).to({state:[{t:this.shape_37},{t:this.shape_35}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-289.6,685.8,533.3);


(lib.canalejas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape.setTransform(621.725,166.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA1AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_1.setTransform(600.8,166.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIAzAAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_2.setTransform(577.35,166.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_3.setTransform(560.825,178.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_4.setTransform(548.375,166.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_5.setTransform(447.525,167.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_6.setTransform(426.375,167.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_7.setTransform(405.6,167.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAHIgHATIgUAxg");
	this.shape_8.setTransform(389.075,178.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_9.setTransform(376.625,167.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgcAAgmQAAgmANgbQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAbAAAmQAAAmgOAcQgNAcgXAOQgWAPgeAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANASQANAUAUAAQAWAAAMgUQANgSAAgnQAAgmgNgTQgMgSgWAAQgUAAgNASg");
	this.shape_10.setTransform(620.45,57.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA1AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_11.setTransform(597.55,57.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag1ByQgYgGgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYAUQAYASAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_12.setTransform(575.075,57.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_13.setTransform(560.825,68.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_14.setTransform(548.375,57.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgcAAgmQAAgmANgbQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAbAAAmQAAAmgOAcQgNAcgXAOQgWAPgeAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANASQANAUAUAAQAWAAAMgUQANgSAAgnQAAgmgNgTQgMgSgWAAQgUAAgNASg");
	this.shape_15.setTransform(447.75,54.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_16.setTransform(425.725,54.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag1ByQgYgGgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgJAAgOQAAgPgMgIQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYAUQAYASAAAiQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_17.setTransform(404.175,55.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_18.setTransform(389.925,66.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_19.setTransform(377.475,54.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_20.setTransform(618.875,-54.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_21.setTransform(600.375,-54.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAkIhYDJg");
	this.shape_22.setTransform(584.325,-54.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_23.setTransform(569.475,-43.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAVIg2A0IBlAAIAAAtg");
	this.shape_24.setTransform(554.525,-54.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAkIhYDJg");
	this.shape_25.setTransform(451.675,-54.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAVIg2A0IBlAAIAAAtg");
	this.shape_26.setTransform(430.775,-54.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAXAPQAYAOANAcQANAbAAAmQAAAngNAbQgNAcgYAPQgXAOgdAAQgdAAgXgOgAghg5QgNATABAmQgBAnANASQANAUAUgBQAWABAMgUQAMgSAAgnQAAgmgMgTQgMgSgWgBQgUABgNASg");
	this.shape_27.setTransform(409.65,-54.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_28.setTransform(393.675,-43.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAaQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_29.setTransform(378.475,-54.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgnAPgeQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_30.setTransform(545.125,-177.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_31.setTransform(522.6,-177.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_32.setTransform(499.825,-177.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_33.setTransform(484.975,-166.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("Ag1BzQgYgHgRgNIAWgpQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxAAAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_34.setTransform(470.125,-177.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("Ag4B0QgagJgQgMIASgpQAQALAVAHQAVAHAVAAQAWAAAMgHQALgHAAgLQAAgJgGgGQgHgFgKgEIgbgIQgcgFgRgHQgRgHgNgNQgMgOAAgYQAAgVALgRQALgQAXgLQAWgJAgAAQAXAAAVAGQAXAEAPALIgRAqQgggTgiAAQgWAAgLAIQgLAHAAAMQAAANANAFQANAGAZAGQAbAGASAHQARAHAMAMQANAPAAAXQAAAVgMAQQgLASgXAJQgWAKggAAQgcAAgbgHg");
	this.shape_35.setTransform(601.1,-280.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_36.setTransform(577.25,-280.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AgwBwQgTgJgOgQIAfglQAUAaAZAAQAgAAAAgoIAAhvIhTAAIAAgtICJAAIAACaQAAArgVAWQgWAWgpAAQgYAAgVgJg");
	this.shape_37.setTransform(553.4,-280.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_38.setTransform(535.025,-280.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_39.setTransform(513.975,-280.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_40.setTransform(489.45,-280.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CQIAAiQIA2AAIAADtg");
	this.shape_41.setTransform(462.675,-280.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_42.setTransform(435.95,-280.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AgxBrQgegQgRgbQgQgcAAgkQAAgiAQgcQARgcAegQQAdgQAjAAQAfAAAZAKQAaAMARAUIgkAgQgYgbgkAAQgVAAgRAJQgSAKgKARQgJASAAAVQAAAWAJARQAKARASAKQARAKAVAAQAkAAAYgcIAkAhQgRAUgaALQgZALgfAAQgjAAgdgQg");
	this.shape_43.setTransform(410.75,-280.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_44.setTransform(576.275,-312.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAOAQAbQARAbAAAjQAAAkgRAaQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_45.setTransform(550.925,-312.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_46.setTransform(513.55,-312.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_47.setTransform(491.475,-312.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_48.setTransform(470.925,-312.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_49.setTransform(453.825,-312.85);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AgbB3IhmjtIA8AAIBHCpIBKipIA2AAIhnDtg");
	this.shape_50.setTransform(435.6,-312.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_51.setTransform(505.025,-4.475);
	this.shape_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AmiEuIgKg0IgPgsIgvhYIDNkoIAzgzIATAAIBIgJIAwgOIBdgpIAfgSIDNgpIC5CgIBHAsIiIDZIgrA2IgoAmIgtAfIgMAHIgPgHIgegGIgMAAIgaABIggAGIgZAIIgVALIgLAHIgNALIjzB7IhRgPg");
	this.shape_52.setTransform(0.078,0.0173);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#ABD25D").s().p("AknFSIh7gkIgJg0IgQgsIgvhYIDOkoIAygzIAUAAIBHgJIAwgOIBdgpIAggSIDNgpIC4CgIBIAsIiIDZIgsA2IgnAmIgtAfIgNAHIgPgHIgdgGIgMAAIgaABIghAGIgYAIIgWALIgKAHIgNALIjzB7g");
	this.shape_53.setTransform(0.025,0.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AmiEuIgKg0IgPgsIgvhYIDNkoIAzgzIATAAIBIgJIAwgOIBdgpIAfgSIDNgpIC5CgIBHAsIiIDZIgrA2IgoAmIgtAfIgMAHIgPgHIgegGIgmABIggAGIgZAIIgVALIgLAHIgNALIjzB7IhRgPg");
	this.shape_54.setTransform(0.078,0.0173);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF1000").s().p("AknFSIh7gkIgJg0IgQgsIgvhYIDOkoIAygzIAUAAIBHgJIAwgOIBdgpIAggSIDNgpIC4CgIBIAsIiIDZIgsA2IgnAmIgtAfIgNAHIgPgHIgdgGIgmABIghAGIgYAIIgWALIgKAHIgNALIjzB7g");
	this.shape_55.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52}]}).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-340.6,740,531.3);


(lib.calpu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DATOS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgJAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgMQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape.setTransform(674.975,258);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAIAQAAQARAAAKgIQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_1.setTransform(654.175,258.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_2.setTransform(632.475,258.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgQgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_3.setTransform(495.075,257.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgKQAFgLAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAWIg2A0IBlAAIAAAtg");
	this.shape_4.setTransform(474.075,257.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAkIhYDJg");
	this.shape_5.setTransform(453.825,257.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgIAAgPQAAgQgMgIQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_6.setTransform(674.475,147.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgQgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_7.setTransform(653.525,147.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAkIhYDJg");
	this.shape_8.setTransform(632.325,147.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_9.setTransform(495.575,146.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_10.setTransform(475.525,146.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_11.setTransform(454.725,146.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgSQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAfAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_12.setTransform(681.725,34.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_13.setTransform(663.225,34.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgnAPgeQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_14.setTransform(647.375,34.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_15.setTransform(631.775,45.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_16.setTransform(619.325,34.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape_17.setTransform(503.075,34.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_18.setTransform(483.875,34.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_19.setTransform(467.825,34.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_20.setTransform(452.975,45.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_21.setTransform(440.525,34.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_22.setTransform(601.575,-86.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_23.setTransform(580.425,-86);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_24.setTransform(560.275,-86);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAHIgHATIgUAxg");
	this.shape_25.setTransform(546.425,-74.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_26.setTransform(531.225,-86);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_27.setTransform(684.075,-222.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_28.setTransform(657.35,-222.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhmB3IAAjtIBmAAQAgAAAXAKQAXALANAUQAMATAAAbQAAAagMASQgNAUgXAKQgXAKggAAIgvAAIAABCgAgvAIIAtAAQAYAAANgJQANgLAAgTQAAgVgNgLQgNgKgYAAIgtAAg");
	this.shape_29.setTransform(632.575,-222.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_30.setTransform(610.425,-222.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("ABMB3IgVgzIhuAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_31.setTransform(585.9,-222.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_32.setTransform(563.825,-222.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgQQAOgPAAggIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_33.setTransform(538.875,-222.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AhmB3IAAjtIBmAAQAgAAAXAKQAXALANAUQAMATAAAbQAAAagMASQgNAUgXAKQgXAKggAAIgvAAIAABCgAgvAIIAtAAQAYAAANgJQANgLAAgTQAAgVgNgLQgNgKgYAAIgtAAg");
	this.shape_34.setTransform(513.775,-222.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_35.setTransform(491.625,-222.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("ABMB3IgVgzIhuAAIgVAzIg4AAIBpjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_36.setTransform(467.1,-222.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AgxBrQgegPgRgdQgQgbAAgkQAAgjAQgcQARgbAegRQAdgPAjAAQAgAAAYALQAaAKAQAVIgjAgQgYgbgjAAQgWAAgRAJQgSAKgKARQgJASAAAVQAAAWAJASQAKAQASALQARAJAWAAQAjAAAYgcIAjAgQgQAWgaAKQgZALgfAAQgjAAgdgQg");
	this.shape_37.setTransform(441.9,-222.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_38.setTransform(564.025,87.875);
	this.shape_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AFmKZIglgdIiMh7IhAgpIhBgbIg9gQIgVAAIgGgSIgSgiIgYgeIgcgaIgigWIg4gcIhUgaIhwgTIjdgLIgKAJIgKAGIgJADIgNABIhFABIACgSIAfidIAihjIAnhOIAog5IAkgnIA4gvIBvAQIAegBIBFgJIBnAAIAVA8ICEAgICjAJIANgNIAog2IAHgNIASgqIBIj4IAQgnIAOgbIASgYIAOgOIAYgTIAdgOIAKgDIAgABIAUAEIAHACIAGABIAGACIAGACIAbANIAKAGIBQA8IANInIgNCbIAfABIAYAEIAkALIAXADIAAApIiPBnIAGCEIAhCZIggASIhdAqIggAKIgqAIIgkAEg");
	this.shape_39.setTransform(-0.0298,-0.0005);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ABD25D").s().p("AFBJ8IiNh7IhAgpIhAgbIg+gQIgUAAIgHgTIgSgiIgXgdIgdgaIghgWIg5gcIhUgaIhvgTIjdgMIgKAJIgKAHIgJACIgNACIhFABIACgSIAfieIAihiIAnhOIAog5IAkgnIA3gvIBwAQIAegBIBFgKIBnAAIAUA9ICFAgICiAJIAOgNIAng2IAIgNIASgqIBIj5IAQgmIAOgbIASgZIAOgNIAXgTIAegOIAKgDIAfABIAVADIAGACIAHACIAGACIAFABIAbANIALAHIBQA8IANInIgNCaIAfACIAYAEIAkAKIAXADIAAAqIiQBnIAHCEIAhCZIggASIheAqIgfAKIgqAIIgkAEIgeAAg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AFmKYIixiXIhAgqIhBgbIg9gPIgVAAIgGgTIgSgiIgYgdIgcgaIgigXIg4gbIhUgaIhwgUIjdgLIgKAJIgKAHIgJACIgNACIhFABIACgSIAfieIAihiIAnhOIAog5IAkgoIA4guIBvAQIAegBIBFgKIBnAAIAVA9ICEAgICjAJIANgOIAog1IAHgNIASgqIBIj5IAQgnIAOgaIASgZIAOgOIAYgSIAdgOIAKgEIAgACIAUADIAHACIAGABIAGADIAGABIAbANIAKAHIBQA8IANInIgNCaIAfACIAYAEIAkAKIAXADIAAApIiPBoIAGCEIAhCZIggASIhdApIhKATg");
	this.shape_41.setTransform(-0.0298,0.0045);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF1000").s().p("AC0IBIhAgpIhAgbIg+gQIgUAAIgHgTIgSgiIgXgdIgdgaIghgWIg5gcIhUgaIhvgTIjdgMIgKAJIgKAHIgJACIgNACIhFABIACgSIAfieIAihiIAnhOIAog5IAkgnIA3gvIBwAQIAegBIBFgKIBnAAIAUA9ICFAgICiAJIAOgNIAng2IAIgNIASgqIBIj5IAQgmIAOgbIASgZIAOgNIAXgTIAegOIAKgDIAfABIAVADIAGACIAHACIAGACIAFABIAbANIALAHIBQA8IANInIgNCaIAfACIAYAEIAkAKIAXADIAAAqIiQBnIAHCEIAhCZIggASIheAqIhJASIhCAEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-250.6,821.5,531.9);


(lib.cabecera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// data
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgJAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgMQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape.setTransform(512.525,148.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_1.setTransform(492.475,148.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_2.setTransform(470.825,148.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_3.setTransform(455.225,159.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_4.setTransform(440.025,148.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA0AAIAAArIAoAAIAAAtIgoAAIAAAyg");
	this.shape_5.setTransform(340.9,147.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_6.setTransform(318.325,147.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_7.setTransform(296.675,147.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_8.setTransform(281.075,158.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_9.setTransform(265.875,147.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgSAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape_10.setTransform(510.675,35.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_11.setTransform(489.475,35.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_12.setTransform(468.575,35.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_13.setTransform(452.975,46.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWAKQgXALgfAAQgZAAgYgHg");
	this.shape_14.setTransform(437.775,35.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAjIhYDKg");
	this.shape_15.setTransform(339.525,34.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgSAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape_16.setTransform(317.975,34.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMASQgMARgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgKQALgJAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_17.setTransform(296.975,34.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_18.setTransform(281.375,45.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgpQANAJASAGQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAcQAAAUgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_19.setTransform(266.175,34.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_20.setTransform(510.425,-78.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgKQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_21.setTransform(493.925,-78.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_22.setTransform(472.675,-78.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_23.setTransform(458.825,-66.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_24.setTransform(443.875,-78.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgRQARgSACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAKQALAJATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_25.setTransform(341.575,-77.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape_26.setTransform(319.7,-77.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_27.setTransform(296.925,-77.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAGIgHAUIgUAxg");
	this.shape_28.setTransform(282.075,-65.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_29.setTransform(267.125,-77.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAgmANgbQANgcAXgOQAXgPAdAAQAeAAAWAPQAXAOANAcQAOAbAAAmQAAAmgOAcQgNAcgXAPQgWAOgeAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANASQANATAUAAQAWAAAMgTQANgSAAgnQAAgmgNgTQgMgTgWAAQgUAAgNATg");
	this.shape_30.setTransform(434.25,-194.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_31.setTransform(411.35,-194.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_32.setTransform(391.275,-194.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_33.setTransform(381.475,-183.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_34.setTransform(366.275,-194.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_35.setTransform(348.875,-194.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_36.setTransform(485.625,-301.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_37.setTransform(461.1,-301.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AhmB3IAAjtIBmAAQAgAAAXAKQAXALANAUQAMATAAAbQAAAagMASQgNAUgXAKQgXAKggAAIgvAAIAABCgAgvAIIAtAAQAYAAANgJQANgLAAgTQAAgVgNgLQgNgKgYAAIgtAAg");
	this.shape_38.setTransform(436.325,-301.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_39.setTransform(417.625,-301.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AgyBrQgdgPgRgdQgRgbAAgkQAAgjARgcQARgbAdgRQAegPAkAAQAeAAAaALQAZAKAQAVIgjAgQgYgbgjAAQgWAAgRAJQgRAKgLARQgJASAAAVQAAAWAJASQALAQARALQARAJAWAAQAjAAAYgcIAjAgQgRAWgZAKQgZALgfAAQgjAAgegQg");
	this.shape_40.setTransform(399.9,-301.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_41.setTransform(381.625,-301.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_42.setTransform(362.325,-301.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgQQAOgPAAggIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_43.setTransform(335.175,-301.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_44.setTransform(305.575,-301.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_45.setTransform(478.2,-333.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("AAvB3IgvhCIgBAAIgwAAIAABCIg3AAIAAjtIBnAAQAfAAAWALQAYAKAMATQANAUAAAaQAAAbgNASQgNATgXALIA1BMgAgxAJIAtAAQAYAAANgKQAMgLAAgUQAAgTgMgLQgNgLgYAAIgtAAg");
	this.shape_46.setTransform(453.5,-333.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_47.setTransform(429.375,-333.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AgyBrQgdgQgRgcQgRgbAAgkQAAgiARgcQARgdAdgQQAegPAjAAQAgAAAZAKQAZAMAQAUIgjAhQgYgcgjAAQgWAAgRAKQgRAJgLASQgJARAAAVQAAAWAJARQALASARAJQARAKAWAAQAjAAAYgcIAjAhQgQAUgaALQgZALgfAAQgjAAgegQg");
	this.shape_48.setTransform(405.2,-333.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAtIh8AAIAAAzIBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_49.setTransform(381.725,-333.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AhsB3IAAjtIBzAAQAsAAAXARQAXARAAAcQAAARgIAOQgIAOgPAHQAUAGAMAPQALAPAAAWQAAAggYAQQgYARgvAAgAg1BOIA/AAQAWgBALgGQALgIAAgPQAAgegsAAIg/AAgAg1gUIA1AAQAVgBAKgGQALgIAAgOQAAgNgLgIQgKgGgVgBIg1AAg");
	this.shape_50.setTransform(357.425,-333.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("ABLB3IgVgzIhtAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_51.setTransform(330.7,-333.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AgyBrQgdgQgRgcQgRgbAAgkQAAgiARgcQARgdAdgQQAegPAkAAQAeAAAaAKQAYAMASAUIgkAhQgYgcgjAAQgWAAgRAKQgSAJgJASQgKARAAAVQAAAWAKARQAJASASAJQARAKAWAAQAjAAAYgcIAkAhQgSAUgZALQgZALgfAAQgjAAgegQg");
	this.shape_52.setTransform(305.5,-333.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_53.setTransform(391.025,-22.475);
	this.shape_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AkTFWIAfhlIAXABIA7gEIAfgHIAZgKIAKgGIAQgPIAGgIIAJgSIACgKIABgVIgCgXIgMglIgTgmIgjgzIghglIgKg+IBIgTIAngSIA8gmIDOi2IBJALIg1GKIgBB0IAEAmIAJAiIAMAaIAIALIAKAIIALAGIAABHIhTAKIjUgVIgLAKIgKALIiTgGIhHgNg");
	this.shape_54.setTransform(-0.0218,0.0155);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#ABD25D").s().p("AgTFWIgLAKIgKALIiTgGIhGgNIgSgCIAfhlIAXABIA7gEIAfgHIAYgKIAKgGIARgPIAGgIIAIgSIADgKIABgVIgDgXIgLglIgTgmIgkgzIggglIgLg+IBJgTIAngSIA8gmIDOi2IBIALIg0GKIgCB0IAFAmIAIAiIANAaIAIALIAJAIIALAGIAABHIhSAKg");
	this.shape_55.setTransform(0.025,0.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AkTFWIAfhlIAXABIA7gEIAfgHIAZgKIAKgGIAQgPIAGgIIAJgSIACgKIABgVIgCgXIgMglIgTgmIgjgzIghglIgKg+IBIgTIAngSIA8gmIDOi2IBJALIg1GKIgBB0IAEAmIAJAiIAMAaIAIALIAKAIIALAGIAABHIhTAKIjUgVIgVAVIiTgGg");
	this.shape_56.setTransform(-0.0173,0.0153);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF1000").s().p("AgTFWIgVAVIiTgGIhYgPIAfhlIAXABIA7gEIAfgHIAYgKIAKgGIARgPIAGgIIAIgSIADgKIABgVIgDgXIgLglIgTgmIgkgzIggglIgLg+IBJgTIAngSIA8gmIDOi2IBIALIg0GKIgCB0IAFAmIAIAiIANAaIAIALIAJAIIALAGIAABHIhSAKg");
	this.shape_57.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54}]}).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-361.3,602.6,532.8);


(lib.buenavista = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape.setTransform(539.825,204.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_1.setTransform(523.975,204.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_2.setTransform(504.825,204.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAXIg2AzIBlAAIAAAtg");
	this.shape_3.setTransform(372.275,204.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhnCOIBAAAIAAgrIAzAAIAAArIAoAAIAAAtIgoAAIAAAyg");
	this.shape_4.setTransform(351.35,204.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhTB5IAAgkIBahVQAPgOAFgLQAFgKAAgJQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIAQgXAXIg2AzIBlAAIAAAtg");
	this.shape_5.setTransform(328.775,204.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUApQgSgMgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgegAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_6.setTransform(544.975,90.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgIQAVgJAaAAQAbAAAVAJQAVAIALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAARQAAAPAMAJQAMAJAUAAQAUAAAMgJQAMgJAAgPQAAgRgMgIQgMgKgUAAQgUAAgMAKgAgahKQgKAJAAANQAAAOAKAIQAKAIAQAAQARAAAKgIQAKgIAAgOQAAgNgKgJQgKgIgRAAQgQAAgKAIg");
	this.shape_7.setTransform(522.575,90.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhTB5IAAgjIBahWQAPgOAFgLQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgLQAZgMAfAAQAaAAAUAJQATAIALAQQAMAQAAAVQAAAUgJAQQgIARgXAWIg2AzIBlAAIAAAtg");
	this.shape_8.setTransform(500.875,90.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_9.setTransform(372.625,92.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAdAAAYAOQAWAPAOAcQANAbAAAmQAAAngNAbQgOAcgWAOQgYAPgdAAQgdAAgXgPgAghg5QgMATAAAmQAAAnAMATQAMATAVAAQAVAAANgTQANgTAAgnQAAgmgNgTQgNgSgVAAQgVAAgMASg");
	this.shape_10.setTransform(355.7,92.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg2IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_11.setTransform(333.425,92.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIA0AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_12.setTransform(546.5,-18.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_13.setTransform(523.925,-18.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_14.setTransform(502.275,-18.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_15.setTransform(371.425,-22.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape_16.setTransform(354.825,-22.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_17.setTransform(333.125,-22.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgqQANAKASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxAAAYATQAYAUAAAhQAAAWgLASQgLARgWAMQgWAKggAAQgZAAgZgHg");
	this.shape_18.setTransform(474.025,-136.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape_19.setTransform(452.85,-136.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg2IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_20.setTransform(430.025,-136.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAGIgHAUIgUAxg");
	this.shape_21.setTransform(416.175,-125.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_22.setTransform(403.725,-136.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("ABMB3IgVgzIhuAAIgVAzIg4AAIBqjtIA1AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_23.setTransform(544.15,-277.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgaB3IAAjAIhNAAIAAgtIDOAAIAAAtIhMAAIAADAg");
	this.shape_24.setTransform(520.6,-277.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("Ag4BzQgagHgQgMIASgqQAQALAVAHQAVAHAVAAQAXAAALgHQALgHAAgMQAAgIgHgFQgGgHgKgDIgcgHQgbgHgRgGQgRgHgNgNQgMgOAAgYQAAgVALgQQALgSAXgJQAXgKAfAAQAXAAAWAFQAWAGAPAKIgRAqQgggTghAAQgXAAgLAHQgLAIABANQgBALANAHQANAGAZAFQAbAGASAHQARAGANAOQAMAOAAAYQAAATgMASQgLARgXAJQgWAKggAAQgdAAgagIg");
	this.shape_25.setTransform(499.3,-277.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_26.setTransform(482.875,-277.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgbB3IhmjtIA7AAIBICpIBKipIA2AAIhnDtg");
	this.shape_27.setTransform(464.65,-277.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBrDtgAgmAaIBLAAIglhag");
	this.shape_28.setTransform(438.95,-277.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_29.setTransform(412.175,-277.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAApIhtAAIAAA4ICAAAIAAAsg");
	this.shape_30.setTransform(387.675,-277.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgQQAOgPAAggIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_31.setTransform(362.225,-277.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhsB3IAAjtIBzAAQAsAAAXARQAXAQAAAdQAAASgIANQgIANgPAJQAUAFAMAPQALAPAAAWQAAAfgYARQgYARgvAAgAg1BOIA/AAQAWAAALgIQALgHAAgOQAAgfgsAAIg/AAgAg1gUIA1AAQAVAAAKgIQALgGAAgOQAAgOgLgIQgKgGgVAAIg1AAg");
	this.shape_32.setTransform(336.575,-277.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_33.setTransform(441.025,34.525);
	this.shape_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AiUDMIg9glIgWgQIitiXIAHgfICngMICNgWICCgjIAvgVIAmgYIAVgSIBqgyIAfgJIAPgBIAaAAIAkBvIAqALIh8CwIg0A3IgXAUIglAZIhJAhIhFAQg");
	this.shape_34.setTransform(0.1361,0.0284);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ABD25D").s().p("AiTDMIg9glIgWgQIitiXIAHgfICogMICMgWICCgjIAvgVIAmgYIAVgSIBqgyIAggJIAOgBIAaAAIAkBvIAqALIh8CwIg0A3IgWAUIgmAZIhIAhIhGAQg");
	this.shape_35.setTransform(0,0.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF1000").s().p("AiTDMIg9glIgWgQIitiXIAHgfICogMICMgWICCgjIAvgVIAmgYIAVgSIBqgyIAggJIAOgBIAaAAIAkBvIAqALIh8CwIg0A3IgWAUIgmAZIhIAhIhGAQg");
	this.shape_36.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34}]}).to({state:[{t:this.shape_36},{t:this.shape_34}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-305.6,664.4,533.1);


(lib.aldama = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgRQARgSACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAKQALAJATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape.setTransform(703.075,185.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgRQARgSACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAKQALAJATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_1.setTransform(681.425,185.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag0ByQgZgGgRgMIAWgrQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg2IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_2.setTransform(660.175,185.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAYAPQAWAOAOAcQANAbAAAmQAAAngNAbQgOAcgWAPQgYAOgdAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMASQAMAUAVgBQAVABANgUQANgSAAgnQAAgmgNgTQgNgSgVgBQgVABgMASg");
	this.shape_3.setTransform(533.1,183.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAYAPQAXAOAMAcQAOAbAAAmQAAAngOAbQgMAcgXAPQgYAOgdAAQgdAAgXgOgAghg5QgNATABAmQgBAnANASQANAUAUgBQAVABANgUQAMgSAAgnQAAgmgMgTQgNgSgVgBQgUABgNASg");
	this.shape_4.setTransform(510,183.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgrIA0AAIAAArIAmAAIAAAtIgmAAIAAAyg");
	this.shape_5.setTransform(487.1,183.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgNAFgLQAFgJAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAXIg2AzIBlAAIAAAtg");
	this.shape_6.setTransform(706.775,72.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAJAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgJQgMgKgUAAQgUAAgMAKgAgahKQgKAJAAAOQAAANAKAIQAKAIAQAAQARAAAKgIQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_7.setTransform(685.975,72.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAnAAIAAAtIgnAAIAAAyg");
	this.shape_8.setTransform(663.4,72.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAIAQAAQARAAAKgIQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_9.setTransform(533.975,71.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAglANgcQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAcAAAlQAAAngOAbQgNAcgXAOQgWAPgeAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQANASAUABQAWgBAMgSQANgTAAgnQAAgmgNgTQgMgSgWAAQgUAAgNASg");
	this.shape_10.setTransform(511.2,71.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgIQAMgJAAgOQAAgQgMgHQgNgIgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWALQgWAKggAAQgZAAgZgHg");
	this.shape_11.setTransform(489.275,72.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARARAAAbQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_12.setTransform(704.875,-39);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape_13.setTransform(684.225,-39.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape_14.setTransform(661.775,-39.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgcQAPgdAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALARAAAWQAAAYgMARQgMATgUAKQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_15.setTransform(533.075,-39.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgQgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_16.setTransform(510.775,-39.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAAQQAAAQAMAJQAMAKAUgBQAUABAMgKQAMgJAAgQQAAgQgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAHAAAOQAAAOAKAIQAKAIAQgBQARABAKgIQAKgIAAgOQAAgOgKgHQgKgJgRABQgQgBgKAJg");
	this.shape_17.setTransform(489.025,-39.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgKQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_18.setTransform(633.175,-159.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_19.setTransform(611.975,-159.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_20.setTransform(590.875,-159.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_21.setTransform(576.025,-148.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_22.setTransform(563.575,-159.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_23.setTransform(667.6,-296.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("ABTB3IgBiOIhGB1IgYAAIhFhyIAACLIg0AAIAAjtIAtAAIBZCTIBXiTIAuAAIAADtg");
	this.shape_24.setTransform(638.325,-296.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_25.setTransform(609.1,-296.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAPAQAaQARAbAAAjQAAAjgRAbQgQAbgeAPQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgUgjAAIgyAAg");
	this.shape_26.setTransform(582.725,-296.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_27.setTransform(558.925,-296.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_28.setTransform(534.4,-296.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_29.setTransform(603.025,12.125);
	this.shape_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AkTETIAmgjIAWgYIAOgWIAMgaIAJgmIgNgHIhegiIg/gfIAQiyIgKhhIAbABIAiAHIBCATIAUAEIAUABIAHAAIANgDIAUgIIAUgPIAHgGIAvgCIDWggIBngbIAwgRIAbgOIAVAAIgRA4IgTApIgqBCIhLBWIhUBKIhHA3IgOA/IgIA+IACBwIglADQhDACgdgFQhCgNhigSg");
	this.shape_30.setTransform(0.0949,0.0286);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ABD25D").s().p("AhvEyQhBgNhigSIAlgjIAWgYIAPgWIALgaIAJgmIgMgHIhegiIg/gfIAQiyIgKhhIAbABIAhAHIBDATIAUAEIAUABIAGAAIAOgDIAUgIIAUgPIAHgGIAugCIDXggIBngbIAvgRIAcgOIAUAAIgQA4IgTApIgrBCIhKBWIhUBKIhHA3IgPA/IgHA+IABBwIgkADIgkABQgoAAgVgEg");
	this.shape_31.setTransform(0.025,0.0286);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AkTETIA8g7IAOgWIAMgaIAJgmIgNgHIhegiIg/gfIAQiyIgKhhIAbABIAiAHIBCATIAUAEIAUABIAHAAIANgDIAUgIIAUgPIAHgGIAvgCIDWggIBngbIAwgRIAbgOIAVAAIgRA4IgTApIgqBCIhLBWIhUBKIhHA3IgOA/IgIA+IACBwIglADQhDACgdgFQhCgNhigSg");
	this.shape_32.setTransform(0.0949,0.0286);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF1000").s().p("AhvEyQhBgNhigSIA7g7IAPgWIALgaIAJgmIgMgHIhegiIg/gfIAQiyIgKhhIAbABIAhAHIBDATIAUAEIAUABIAGAAIAOgDIAUgIIAUgPIAHgGIAugCIDXggIBngbIAvgRIAcgOIAUAAIgQA4IgTApIgrBCIhKBWIhUBKIhHA3IgPA/IgHA+IABBwIgkADIgkABQgoAAgVgEg");
	this.shape_33.setTransform(0.025,0.0286);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-324.6,820,533.3);


(lib.agua_esc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AASB3IAAgyIh/AAIAAglIBuiWIA7AAIhoCOIA/AAIAAgrIA0AAIAAArIAnAAIAAAtIgnAAIAAAyg");
	this.shape.setTransform(564.45,160.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAeAAAWAPQAXAOANAcQAOAbAAAmQAAAngOAbQgNAcgXAPQgWAOgeAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANASQANAUAUgBQAWABAMgUQANgSAAgnQAAgmgNgTQgMgSgWgBQgUABgNASg");
	this.shape_1.setTransform(540.8,160.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_2.setTransform(518.875,160.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_3.setTransform(386.775,160.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_4.setTransform(368.975,160.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgqQANAKASAFQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYATAAAhQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_5.setTransform(353.225,160.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgTAJgOQAJgOASgIQgOgIgHgNQgHgMAAgQQAAgVAMgPQALgQAVgHQAVgJAaAAQAbAAAVAJQAVAHALAQQAMAPAAAVQAAAQgHAMQgHANgOAIQARAIAKAOQAJAOAAATQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAQQAAAPAMAKQAMAIAUABQAUgBAMgIQAMgKAAgPQAAgQgMgKQgMgJgUAAQgUAAgMAJgAgahKQgKAJAAAOQAAANAKAIQAKAHAQABQARgBAKgHQAKgIAAgNQAAgOgKgJQgKgHgRgBQgQABgKAHg");
	this.shape_6.setTransform(564.725,46.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhnCOIBAAAIAAgsIAzAAIAAAsIAoAAIAAAtIgoAAIAAAyg");
	this.shape_7.setTransform(542.15,46.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag1ByQgYgGgRgNIAWgpQANAJASAGQASAGATAAQATAAAMgJQAMgHAAgPQAAgPgMgJQgNgHgdAAIg9AAIAMiFICQAAIAAAsIhiAAIgEAtIAUAAQAxABAYATQAYATAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgHg");
	this.shape_8.setTransform(519.675,47);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAglANgcQANgcAXgOQAXgPAdAAQAdAAAYAPQAWAOAOAcQANAcAAAlQAAAngNAbQgOAcgWAPQgYAOgdAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMASQAMAUAVgBQAVABANgUQAMgSAAgnQAAgmgMgTQgNgSgVgBQgVABgMASg");
	this.shape_9.setTransform(391.8,48.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_10.setTransform(369.575,48.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("Ag1BzQgYgHgRgMIAWgrQANALASAFQASAGATAAQATAAAMgIQAMgIAAgPQAAgQgMgIQgNgHgdAAIg9AAIAMiFICQAAIAAAtIhiAAIgEAtIAUAAQAxgBAYAVQAYASAAAiQAAAWgLASQgLASgWAKQgWALggAAQgZAAgZgGg");
	this.shape_11.setTransform(348.775,48.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAgmANgbQANgcAXgOQAXgPAdAAQAdAAAXAPQAYAOANAcQANAbAAAmQAAAmgNAcQgNAcgYAPQgXAOgdAAQgdAAgXgOgAghg5QgMATAAAmQAAAnAMASQANATAUAAQAWAAAMgTQAMgSAAgnQAAgmgMgTQgMgTgWAAQgUAAgNATg");
	this.shape_12.setTransform(574.35,-64.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgcAAgmQAAgmANgbQANgcAXgOQAXgPAdAAQAeAAAWAPQAXAOANAcQAOAbAAAmQAAAmgOAcQgNAcgXAPQgWAOgeAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANASQANATAUAAQAWAAAMgTQANgSAAgnQAAgmgNgTQgMgTgWAAQgUAAgNATg");
	this.shape_13.setTransform(551.25,-64.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_14.setTransform(528.975,-64.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_15.setTransform(515.125,-53.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_16.setTransform(502.675,-64.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgoQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgSQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAfAAA5QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAKg");
	this.shape_17.setTransform(400.875,-64.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgJQAFgKAAgKQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_18.setTransform(379.875,-64.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BzQgZgHgRgNIAWgpQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_19.setTransform(359.575,-64.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_20.setTransform(345.725,-53.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_21.setTransform(333.275,-64.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgSQALgRAVgKQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAJQALAKATAAQARAAALgKQAMgKAAgQQAAgPgMgKQgLgKgSAAQgSAAgLAJg");
	this.shape_22.setTransform(497.075,-184.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_23.setTransform(476.075,-185.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhFBdQgcgfAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUAoQgSgLgbAAQgdAAgSASQgRARgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMASgUAKQgVAKgZAAQgxAAgcgegAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgJQgLgKgTAAQgRAAgLAKg");
	this.shape_24.setTransform(456.025,-184.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgcA6IAOg2QgIgEgFgGQgFgIAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAGIgHAUIgUAxg");
	this.shape_25.setTransform(440.425,-173.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhTB5IAAgjIBahXQAPgOAFgKQAFgKAAgJQAAgPgKgHQgJgIgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgUAYgNQAZgLAfAAQAaAAAUAJQATAIALAQQAMAQAAAWQAAATgJARQgIAPgXAWIg2A0IBlAAIAAAtg");
	this.shape_26.setTransform(425.475,-185.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_27.setTransform(612.25,-320.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAPAQAbQARAaAAAjQAAAkgRAaQgQAcgeAOQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjgBIgyAAg");
	this.shape_28.setTransform(585.875,-320.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_29.setTransform(565.525,-320.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("Ah3B3IAAjtIBtAAQAlAAAeAPQAeAPAQAbQARAaAAAjQAAAkgRAaQgQAcgeAOQgeAPglAAgAg/BKIAyAAQAjAAAVgUQAVgUAAgiQAAghgVgUQgVgTgjgBIgyAAg");
	this.shape_30.setTransform(546.625,-320.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("ABAB3Ih2iPIAACPIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape_31.setTransform(518.125,-320.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhCBrQgegQgRgcQgQgcAAgjQAAgiAQgcQARgcAegQQAegQAkAAQAlAAAdAQQAeAQARAcQARAcAAAiQAAAjgRAcQgRAcgeAQQgdAQglAAQgkAAgegQgAglhCQgRAKgKARQgKASAAAVQAAAWAKASQAKAQARALQARAJAUAAQAVAAARgJQARgLAJgQQAKgSAAgWQAAgVgKgSQgJgRgRgKQgRgJgVAAQgUAAgRAJg");
	this.shape_32.setTransform(490.075,-320.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgyBrQgdgPgRgcQgQgdgBgjQABgiAQgdQARgcAdgPQAegQAkAAQAeAAAZAKQAZALASAVIgkAgQgYgbgkAAQgVAAgRAJQgSAKgJARQgKASAAAVQAAAWAKASQAJAQASALQARAJAVAAQAkAAAYgcIAkAgQgSAWgZAKQgZALgfAAQgjAAgegQg");
	this.shape_33.setTransform(463.55,-320.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("Ag3BzQgbgHgQgNIATgpQAPALAVAHQAVAHAVAAQAWAAAMgHQALgHAAgMQAAgIgHgFQgGgGgLgEIgbgIQgbgFgRgHQgSgGgMgOQgMgOAAgYQAAgVALgQQALgRAXgKQAXgKAfAAQAXAAAWAFQAWAGAQAKIgRAqQghgTghAAQgWAAgLAIQgLAHAAANQAAALAMAHQANAFAZAGQAcAHAQAGQASAGANAOQAMANAAAYQAAAVgLAQQgMARgWAKQgXAKggAAQgcAAgagIg");
	this.shape_34.setTransform(440.05,-320.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AhbB3IAAjtICzAAIAAAsIh8AAIAAA0IBtAAIAAAqIhtAAIAAA3ICAAAIAAAsg");
	this.shape_35.setTransform(418.425,-320.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_36.setTransform(383.8,-320.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgQQAOgPAAggIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_37.setTransform(357.325,-320.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AgzBrQgegPgQgcQgRgdAAgjQAAgiARgdQAQgcAegPQAegQAlAAQAfAAAaAKQAZALARAUIgjAgQgZgagkAAQgXAAgRAJQgRAKgLARQgJARgBAWQABAWAJASQALAQARALQARAJAWAAQAXAAAUgKIAAhFIAyAAIAABgQgUAOgZAIQgaAIgaAAQgjAAgegQg");
	this.shape_38.setTransform(330.6,-320.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBqDtgAgmAaIBLAAIglhag");
	this.shape_39.setTransform(304.75,-320.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("A2jdhIAAleIROAAIAAFegAFOdYIAAleIROAAIAAFegA2kMSIAAleIRPAAIAAFegAFWMJIAAleIRPAAIAAFegAFWlfIAAleIRPAAIAAFegA2klrIAAleIRPAAIAAFegAoO4CIAAleIRNAAIAAFeg");
	this.shape_40.setTransform(457.275,-7.475);
	this.shape_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AjMDiIgphyIAvgdIAKgJIAoglIArg1ICHjaICuAUIALAkIADAJIAEAGIAFAGIAJAJIAJAGIgzBRIgHAOIgHAWIgHAkIhIDhIizgOg");
	this.shape_41.setTransform(0.0593,-0.0022);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ABD25D").s().p("AhNDdIh/AFIgphyIAvgdIALgJIAnglIAsg1ICHjbICuAVIAKAkIAEAJIAEAGIAFAGIAJAJIAJAGIg0BRIgHAOIgHAWIgGAkIhIDhg");
	this.shape_42.setTransform(0.025,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF1000").s().p("AhNDdIh/AFIgphyIAvgdIALgJIAnglIAsg1ICHjbICuAVIAKAkIAEAJIAEAGIAFAGIAJAJIAJAGIg0BRIgHAOIgHAWIgGAkIhIDhg");
	this.shape_43.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41}]}).to({state:[{t:this.shape_43},{t:this.shape_41}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-348.6,667.5,532.2);


(lib.acazu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// datos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABAB3Ih2iQIAACQIg2AAIAAjtIAtAAIB2CPIAAiPIA2AAIAADtg");
	this.shape.setTransform(615.725,-9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg5AAIBrjtIA1AAIBrDtgAglAaIBKAAIglhag");
	this.shape_1.setTransform(589,-9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhWB3IAAjtIA3AAIAADAIB2AAIAAAtg");
	this.shape_2.setTransform(566.925,-9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgaB3IAAjAIhNAAIAAgtIDOAAIAAAtIhMAAIAADAg");
	this.shape_3.setTransform(544.9,-9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgbB3IAAjtIA3AAIAADtg");
	this.shape_4.setTransform(528.825,-9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AA2B3IAAhhIhrAAIAABhIg3AAIAAjtIA3AAIAABeIBrAAIAAheIA3AAIAADtg");
	this.shape_5.setTransform(509.525,-9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgxBrQgegQgRgcQgQgcAAgjQAAgjAQgcQARgcAegQQAdgPAjAAQAfAAAZALQAaAKARAVIgkAhQgYgcgkAAQgVAAgRAKQgSAJgKASQgJARAAAVQAAAWAJASQAKARASAKQARAJAVAAQAkAAAYgcIAkAgQgRAWgaAKQgZALgfAAQgjAAgdgQg");
	this.shape_6.setTransform(483.65,-9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhOBdQgdgdAAg0IAAiEIA3AAIAACDQAAA/A1AAQAZAAAOgPQAOgPAAghIAAiDIA2AAIAACEQAAA0gcAdQgdAcgzAAQgyAAgcgcg");
	this.shape_7.setTransform(457.525,-9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhnB3IAAgkICBicIh+AAIAAgtIDHAAIAAAkIiBCcICGAAIAAAtg");
	this.shape_8.setTransform(433.05,-9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("ABLB3IgUgzIhuAAIgVAzIg4AAIBqjtIA1AAIBrDtgAgmAaIBLAAIglhag");
	this.shape_9.setTransform(408.35,-9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgyBrQgdgQgRgcQgRgcAAgjQAAgjARgcQARgcAdgQQAegPAjAAQAgAAAZALQAZAKAQAVIgjAhQgYgcgjAAQgWAAgRAKQgRAJgLASQgJARAAAVQAAAWAJASQALARARAKQARAJAWAAQAjAAAYgcIAjAgQgQAWgaAKQgZALgfAAQgjAAgegQg");
	this.shape_10.setTransform(383.15,-9.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("ABMB3IgWgzIhtAAIgVAzIg5AAIBqjtIA2AAIBqDtgAglAaIBKAAIglhag");
	this.shape_11.setTransform(357.45,-9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag0ByQgXgJgMgRQgMgQAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgVAMgPQALgPAVgIQAVgJAaAAQAbAAAVAJQAVAIALAPQAMAPAAAVQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMAQQgNARgXAJQgWAJgeAAQgdAAgXgJgAggAYQgMAIAAARQAAAPAMAJQAMAJAUAAQAUAAAMgJQAMgJAAgPQAAgRgMgIQgMgKgUAAQgUAAgMAKgAgahJQgKAIAAANQAAAOAKAIQAKAIAQAAQARAAAKgIQAKgIAAgOQAAgNgKgIQgKgJgRAAQgQAAgKAJg");
	this.shape_12.setTransform(589.575,473.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_13.setTransform(567.675,473.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_14.setTransform(546.575,473.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgrQANALASAFQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAaQAAAVgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_15.setTransform(415.725,473.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgOAFgJQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAWQAAATgJARQgIAQgXAVIg2A0IBlAAIAAAtg");
	this.shape_16.setTransform(395.825,473.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("Ag0ByQgXgJgMgQQgMgRAAgWQAAgSAJgPQAJgOASgIQgOgJgHgMQgHgMAAgQQAAgUAMgQQALgPAVgJQAVgIAaAAQAbAAAVAIQAVAJALAPQAMAQAAAUQAAAQgHAMQgHAMgOAJQARAIAKAOQAJAPAAASQAAAWgMARQgNAQgXAJQgWAJgeAAQgdAAgXgJgAggAXQgMAKAAAPQAAAQAMAKQAMAJAUAAQAUAAAMgJQAMgKAAgQQAAgPgMgKQgMgJgUAAQgUAAgMAJgAgahJQgKAHAAAOQAAAOAKAIQAKAHAQAAQARAAAKgHQAKgIAAgOQAAgOgKgHQgKgIgRAAQgQAAgKAIg");
	this.shape_17.setTransform(375.025,473.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("Ag0ByQgZgGgRgNIAWgqQANAKASAGQASAGATAAQAUAAALgIQAMgIAAgPQAAgdgrAAIgZAAIAAgkIAwg3IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARARAAAbQAAAVgLASQgLARgWALQgXAKgfAAQgZAAgYgHg");
	this.shape_18.setTransform(591.025,361.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAbAAAmQAAAngOAbQgNAcgXAOQgWAPgeAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQANASAUABQAWgBAMgSQANgTAAgnQAAgmgNgTQgMgSgWAAQgUAAgNASg");
	this.shape_19.setTransform(570.05,361.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("Ag7B3QgRgEgMgJIAUgnQASALAbAAQAdAAASgSQARgSACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgYAMgRQALgTAVgJQAUgKAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhIQgLAKAAAQQAAARALAKQALAJATAAQARAAALgKQAMgKAAgQQAAgQgMgJQgLgKgSAAQgSAAgLAJg");
	this.shape_20.setTransform(547.375,361.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg3IhlAAIAAgtICmAAIAAAkIg2A9QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_21.setTransform(414.125,361.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AhTB5IAAgkIBahWQAPgNAFgKQAFgKAAgKQAAgOgKgJQgJgHgSAAQgQAAgMAGQgNAGgIAMIgogaQAOgVAYgMQAZgLAfAAQAaAAAUAIQATAJALAQQAMAQAAAVQAAAUgJAQQgIARgXAVIg2A0IBlAAIAAAtg");
	this.shape_22.setTransform(394.225,361);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgRQARgTACghQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAfQAcAeAAA5QAAAngPAdQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAKQALAJATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_23.setTransform(373.525,361.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_24.setTransform(601.125,248.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("Ag0BtQgXgPgNgcQgNgbAAgnQAAgmANgbQANgcAXgOQAXgPAdAAQAeAAAWAPQAXAOANAcQAOAbAAAmQAAAngOAbQgNAcgXAPQgWAOgeAAQgdAAgXgOgAghg5QgNATAAAmQAAAnANASQANAUAUgBQAWABAMgUQANgSAAgnQAAgmgNgTQgMgTgWAAQgUAAgNATg");
	this.shape_25.setTransform(579.05,248.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAnIgxAAIAAhUIC9AAIAAAjIhYDKg");
	this.shape_26.setTransform(556.825,248.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAHIgHATIgUAxg");
	this.shape_27.setTransform(541.975,259.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgDB3IAAjBIgvAAIAAgsIBlAAIAADtg");
	this.shape_28.setTransform(529.525,248.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("Ag0BsQgXgOgNgcQgNgbAAgnQAAgmANgbQANgcAXgPQAXgOAdAAQAeAAAWAOQAXAPANAcQAOAbAAAmQAAAngOAbQgNAcgXAOQgWAPgeAAQgdAAgXgPgAghg5QgNATAAAmQAAAnANATQAMATAVAAQAVAAANgTQANgTAAgnQAAgmgNgTQgNgSgVAAQgVAAgMASg");
	this.shape_29.setTransform(427.6,248.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgoAPgdQAPgcAbgPQAcgPAjAAQATAAARAEQASAFAMAHIgUApQgSgMgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAXgMATQgMARgUALQgVAJgZAAQgxAAgcgfgAgYAVQgMAKAAAPQAAAQALAKQAMAKASAAQASAAALgKQALgJAAgRQAAgQgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_30.setTransform(405.575,248.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("Ag0B3IBUjAIhNAAIAAAmIgxAAIAAhTIC9AAIAAAkIhYDJg");
	this.shape_31.setTransform(383.725,248.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgOAKgKQAJgJANAAQAOAAAKAJQAJAKAAAOQAAAHgCAHIgHATIgUAxg");
	this.shape_32.setTransform(368.875,259.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgDB3IAAjAIgvAAIAAgtIBlAAIAADtg");
	this.shape_33.setTransform(356.425,248.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("Ag7B3QgRgFgMgHIAUgpQASAMAbAAQAdAAASgSQARgRACgiQgWAVgkAAQgXAAgTgJQgTgJgLgQQgKgRAAgWQAAgXAMgTQALgRAVgLQAUgJAaAAQAxAAAcAeQAcAeAAA6QAAAogPAcQgPAdgcAPQgbAPgjAAQgTAAgSgEgAghhHQgLAJAAARQAAAQALAJQALAKATAAQARAAALgKQAMgKAAgPQAAgRgMgJQgLgKgSAAQgSAAgLAKg");
	this.shape_34.setTransform(523.875,131.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AhFBcQgcgeAAg5QAAgnAPgdQAPgdAbgPQAcgPAjAAQATAAARAEQASAEAMAIIgUAoQgSgLgbAAQgdAAgSARQgRASgCAiQAVgVAlAAQAXAAATAJQASAJALAQQALAQAAAXQAAAYgMARQgMATgUAJQgVAKgZAAQgxAAgcgfgAgYAVQgMAKAAAQQAAAPALAKQAMAKASAAQASAAALgJQALgKAAgQQAAgRgLgKQgLgJgTAAQgRAAgLAKg");
	this.shape_35.setTransform(502.875,131.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AASB3IAAgyIiAAAIAAglIBwiWIA5AAIhmCOIA/AAIAAgsIA0AAIAAAsIAmAAIAAAtIgmAAIAAAyg");
	this.shape_36.setTransform(480.35,131.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AgcA6IAOg2QgIgDgFgIQgFgHAAgKQAAgPAKgJQAJgJANAAQAOAAAKAJQAJAJAAAPQAAAHgCAHIgHATIgUAxg");
	this.shape_37.setTransform(463.825,142.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("Ag0BzQgZgHgRgMIAWgqQANAKASAFQASAGATAAQAUAAALgIQAMgIAAgOQAAgegrAAIgZAAIAAgjIAwg4IhlAAIAAgsICmAAIAAAjIg2A+QAfAFARASQARASAAAbQAAAUgLARQgLASgWAKQgXALgfAAQgZAAgYgGg");
	this.shape_38.setTransform(448.625,131.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_4
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("A39dQIAAk8ITgAAIAAE8gAE4ctIAAlnITGAAIAAFngAE4L5IAAlOISKAAIAAFOgA3SLoIAAlOISjAAIAAFOgAEnlmIAAlWIR5AAIAAFWgA2wlmIAAk8ISbAAIAAE8gAom3kIAAlrIQ3AAIAAFrg");
	this.shape_39.setTransform(484.225,305.125);
	this.shape_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AiWMYIg6iVIgWgpIgYglIgcgcIgIgGIgZgNIgIgCIgUhRIgEgrIADhmIgvgGIgdgIIghgNIgOgHIgbgTIgSgRIhXhdIAIgVIAchsIADgfIAAg5IgGgoIgWhDIhZi1IAJh1IAPg/IAVg1IAdgrIAQgTIAlgfIArgZIAvgTIBQgSIBagKIFZgRIAeA1IBVASIBJAbIBcAuIgRBHIgjA/IgPAHIgaAUIgVAZIgRAfIgRA2IgJA8IgBBYIALBuIAaB0IAVA6IA/ABICkgMIAiABIAiAGIAlALIA0AaIAcATIAfD2IjYAcIgcApIgIAOIgKAbIgZBfIglAKIkSBog");
	this.shape_40.setTransform(0.0497,0.1189);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ABD25D").s().p("AjQKEIgWgpIgYglIgcgcIgIgGIgZgNIgIgCIgUhRIgEgrIADhmIgvgGIgdgIIghgNIgOgHIgbgTIgSgRIhXhdIAIgVIAchsIADgfIAAg5IgGgoIgWhDIhZi1IAJh1IAPg/IAVg1IAdgrIAQgTIAlgfIArgZIAvgTIBQgSIBagKIFZgRIAeA1IBVASIBJAbIBcAuIgRBHIgjA/IgPAHIgaAUIgVAZIgRAfIgRA2IgJA8IgBBYIALBuIAaB0IAVA6IA/ABICkgMIAiABIAiAGIAlALIA0AaIAcATIAfD2IjYAcIgcApIgIAOIgKAbIgZBfIglAKIkSBoIjmB5g");
	this.shape_41.setTransform(0.025,0.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,0,0,22.9).p("AiWMYIg6iVIgWgpIgYglIgcgcIgIgGIgZgNIgIgCIgUhRIgEgrIADhmIgvgGIgdgIIghgNIgOgHIgtgkIhXhdIAIgVIAchsIADgfIAAg5IgGgoIgWhDIhZi1IAJh1IAPg/IAVg1IAdgrIAQgTIAlgfIArgZIAvgTIBQgSIBagKIFZgRIAeA1IBVASIBJAbIBcAuIgRBHIgjA/IgPAHIgaAUIgVAZIgRAfIgRA2IgJA8IgBBYIALBuIAaB0IAVA6IA/ABICkgMIAiABIAiAGIAlALIA0AaIAcATIAfD2IjYAcIgcApIgIAOIgKAbIgZBfIglAKIkSBog");
	this.shape_42.setTransform(0.0497,0.1189);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF1000").s().p("AjQKEIgWgpIgYglIgcgcIgIgGIgZgNIgIgCIgUhRIgEgrIADhmIgvgGIgdgIIghgNIgOgHIgtgkIhXhdIAIgVIAchsIADgfIAAg5IgGgoIgWhDIhZi1IAJh1IAPg/IAVg1IAdgrIAQgTIAlgfIArgZIAvgTIBQgSIBagKIFZgRIAeA1IBVASIBJAbIBcAuIgRBHIgjA/IgPAHIgaAUIgVAZIgRAfIgRA2IgJA8IgBBYIALBuIAaB0IAVA6IA/ABICkgMIAiABIAiAGIAlALIA0AaIAcATIAfD2IjYAcIgcApIgIAOIgKAbIgZBfIglAKIkSBoIjmB5g");
	this.shape_43.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-80.3,706.4000000000001,576.6999999999999);


// stage content:
(lib.mapajilo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// TOPONIMIO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B237").s().p("AgahbIAHAPIALAQIALAaIATAaIAWAUIgEATIg3A9QgyhnAnhQg");
	this.shape.setTransform(358.8113,23.4984,0.203,0.1668);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B1804A").s().p("AC+DaIg5goIggAMIgaAAIgdgHIg5gfIgTAaIgYACIgoAAIgSgHIgYgQIg4AQIgoADIgcgFIg2g0QgShwAohSQAlhLBMgmQBKgkBYAJQBaAJBNA1QBAgtBqASIglBZIgcAvIgRASIgHATIgMANIgRAHIgWgEIgegUIgUgdIgJgbIgDgXIAAgIIgOgKIgFgPQg8gjhDgCQhDgDg3AdQg5AegbA2QgeA7ANBOQAJAuAjgFQAkgEAUg2QAEgSANAAQAMAAADASQAJBHAbgDQAbgDAYhJQACgWASAAQAQAAAGAWQAOAyAhASQAgARAogUIAOgPIAUgMIAVgEIANADIAPAMIA+A3IgeAoIgfAMg");
	this.shape_1.setTransform(356.6604,23.1042,0.203,0.1668);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9B237").s().p("AgWA2IgggVIgTgaIgHgZIATgTIAhgQIAdgHIATAAIA9BDIg/AjIgRATg");
	this.shape_2.setTransform(363.0233,27.876,0.203,0.1668);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9B237").s().p("AgTBKIgSgYIgtgeIgEgZIAPgbIAXgTIAQgbIAKgBIBEAWIApAdIgMAlIg5A9IgRALg");
	this.shape_3.setTransform(363.2618,24.0446,0.203,0.1668);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9B237").s().p("AAPBFIhYg2IAAgUIAfg9IATgKIAdAIIBEAlIgOBgIgMALg");
	this.shape_4.setTransform(364.6474,21.5848,0.203,0.1668);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9B237").s().p("AAcAvIhVgMIgdgTIBfg+IBOBdg");
	this.shape_5.setTransform(365.6219,29.2476,0.203,0.1668);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9B237").s().p("AgdBYIgqgaIgTgTIgKgQQAphLBAgqIAKAEIAGAJIATAGIAXANIAXARIAPAGIgiA8Ig8A1IgRAMg");
	this.shape_6.setTransform(366.0076,25.7372,0.203,0.1668);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9B237").s().p("AgkA1IgPgaIgCgiIAHhQIAaAAIA1AXIAOAOIAHA2IgEAgIgKAkIgOAQg");
	this.shape_7.setTransform(367.7231,22.8397,0.203,0.1668);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9B237").s().p("AgsBfIgUgSIgJgNIgRgKIgNgYIAfgbIAwg1IAPgUIANgZIALgHIAmAUIAYASIAUAaIAHAYIgMAZIhZBZIgVADg");
	this.shape_8.setTransform(368.6164,27.3382,0.203,0.1668);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9B237").s().p("AANBRIgpgVIgTgQIAoiMIAWAQIARAXIAQBnIgJA0g");
	this.shape_9.setTransform(370.0832,24.1363,0.203,0.1668);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9B237").s().p("AhDAvIB7hpIAMB1g");
	this.shape_10.setTransform(370.205,29.0517,0.203,0.1668);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkHhuQBbAmBlgDQA5gCBcgOQBKgHAlAcQAwAkAcBsQhuAlhbAAQjdAAhqjdg");
	this.shape_11.setTransform(368.657,32.6363,0.203,0.1668);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhfB8QANlDg4iPQDFCfBQCjQhJBxgoD6g");
	this.shape_12.setTransform(374.8339,28.3471,0.203,0.1668);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag5gVQB8jbBuhZQgZBBgCBuQgCBAAIDHQhfA3g9AoQhVA4hZBGQgTh0CIjrg");
	this.shape_13.setTransform(380.6785,28.1345,0.203,0.1668);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AkGA5QgWAAgQgPQgPgQAAgVIAAgIQAAgXAPgPQAQgPAWAAIINAAQAWAAAQAPQAPAPAAAXIAAAIQAAAVgPAQQgQAPgWAAg");
	this.shape_14.setTransform(378.4374,80.544,0.203,0.1668);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9B237").s().p("AgvAuIAQhmIARgYIAWgRIAoCNIgSAQIgqAVIgaARg");
	this.shape_15.setTransform(386.8322,23.661,0.203,0.1668);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9B237").s().p("Ag4g6IB8BpIiHAMg");
	this.shape_16.setTransform(386.7155,28.5847,0.203,0.1668);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AoDBTQgdgsALg0QALg3AxgjQA4goBZAAIL5AAQAYABAdAdQAeAeANApQAiBqhvA7QgEhLgtguQgqgpg6AAIoiAAQhgAAgpAoQgpAqgBBkQg+gNgfgvg");
	this.shape_17.setTransform(378.4037,78.7596,0.203,0.1668);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkpBKQAmhcA9ggQAugZBWACICkAEQBsgDBbgnQhKCZimAxQhEAVhJAAQhlAAhwgmg");
	this.shape_18.setTransform(386.7866,32.4853,0.203,0.1668);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9B237").s().p("AgnBIIgOhFIAHg1IAOgNIA1gYIAaAAIAHBQIgCAiIgOAaIg/Ajg");
	this.shape_19.setTransform(389.1974,22.3686,0.203,0.1668);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F9B237").s().p("AgCBlIhZhaIgMgZIAHgYIAUgaIAZgSIAmgUIAKAHIANAZIA/BJIAfAbIgNAZIgQAJIgKANIgUASIgaAIg");
	this.shape_20.setTransform(388.299,26.8671,0.203,0.1668);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F9B237").s().p("AgqAwIgYgYIgUgeIgOgeIAPgFIAWgSIAqgSIAHgJIAKgEQBBArAoBKIgJAQIgVATIgoAaIgUACg");
	this.shape_21.setTransform(390.918,25.2703,0.203,0.1668);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F9B237").s().p("AhWAvIBOhdIBfA+IgcATIhWAMg");
	this.shape_22.setTransform(391.2936,28.6222,0.203,0.1668);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9B237").s().p("Ag7BBIgOhgIBEglIAegHIATAJIAeA9IAAAUIhZA2IggAHg");
	this.shape_23.setTransform(392.2782,21.1137,0.203,0.1668);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F9B237").s().p("AgQBGIg6g+IgMgkIApgdIBEgWIAKABIAQAbIAWATIAQAbIgDAYIguAfIgSAYIgUAGg");
	this.shape_24.setTransform(393.6587,23.5777,0.203,0.1668);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F9B237").s().p("AgRAqIg/gjIA9hDIATAAIAdAHIAhAQIATATIgHAZIgTAaIghAVIgWAHg");
	this.shape_25.setTransform(393.8973,27.4049,0.203,0.1668);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9B237").s().p("AgUA4IgUgZIgDgSIAWgVIATgZIALgaIAKgRIAHgPQApBRgzBmg");
	this.shape_26.setTransform(398.1091,23.0232,0.203,0.1668);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Av0U+Qi/h5hSjqQhSjrBLjhQBSj4D5iGQBWApBRgEQBNgEA1gsQA1gsANhIQAOhLgkhbQgPgagXgKQgVgJgSAIQgTAIgGAUQgHAWANAbQAwBkguA2QgrA1higWQg1gLgagmQgXgiADgxQAEgvAagqQAbgtAqgWQgxgQgegrQgbgogDg0QgCg0AXguQAZgxAxgaQhZgqgRhHQgPg+Arg7QAqg7BFgQQBMgRBDAwQgCkQDDivQC7ipEWAAQEaAAC2CtQCtCkAbEHQA2gzBHAHQBDAFAsAyQAvAzgJBEQgKBNhTBGQAoATAaAqQAYApADAxQAFBzhrAzQA5AVAgAqQAeAnADAwQADAvgYAmQgYAoguASQhqAcgwgkQg+gtAniPQALgigKgXQgJgVgVgFQgVgFgUAOQgWAPgLAhQgbBiAVBMQATBIA6AqQB6BXDHhSQD+CDBZD1QBRDehLDqQhLDni7B5QjNCFj/hAQA7g7APhPQAOhEgVhHQgThBgpgrQgpgrgqAAIvTAAQg0AAgvAvQgwAugUBFQgWBMAWBIQAZBTBPA9QhWAWhQAAQifAAiMhYg");
	this.shape_27.setTransform(378.5196,58.8958,0.203,0.1668);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#008D39").s().p("AxAb+QjliLhTkWQhPkLBakHQBgkYD4iJQgYhSACg6QADhKAqhOQhfhQBWjjQgng4gGhMQgGhOAehCQAhhJBDgkQBMgoBsAOQApkHDjinQkCibiHkUQBuBVCrAKQBiAFDDgIQAEjLgOhvQgRiLg1hYQDEBXDCDiQA0goBZhvQBjhlCaglQhgBZgCB+QAAAwAMBOIAZCWQBVgKBpACICbADQBOgBA0gQQA/gVA0gzQh2ETlSDDQCuCoBeDVQBZgDBFArQA+AnAjBGQAhBDgBBMQgCBOgkA/QBhCQhvCzQBdB0gzCYQEWCUBoEUQBgD9hPEJQhQELjcCUQjwCjlEgwIhshMIsMAAIh1BHQh5AahtAAQjcAAirhpgA0MN8QhLDhBSDrQBSDqC/B5QDSCED/hCQhPg9gZhTQgWhIAWhMQAUhFAwguQAvgvA0AAIPTAAQAqAAApArQApArATBBQAVBHgOBEQgPBPg7A7QD/BADNiFQC7h5BLjnQBLjqhRjeQhZj1j+iDQjHBSh6hXQg6gqgThIQgVhNAbhiQALghAWgPQAUgOAVAFQAVAFAJAVQAKAXgLAiQgnCQA+AtQAwAkBqgcQAugSAYgpQAYgmgDgvQgDgwgegnQgggqg5gVQBrgzgFhyQgDgxgYgpQgagqgogTQBThGAKhNQAJhEgvgzQgsgyhDgFQhHgHg2AzQgbkHitikQi2itkaAAQkWAAi7CpQjDCvACEQQhDgwhMARQhFAQgqA7QgrA7APA+QARBHBZAqQgxAagZAxQgXAuACAzQADA0AbAoQAeArAxAQQgqAWgbAtQgaAqgEAvQgDAxAXAjQAaAmA1ALQBiAWArg1QAug3gwhkQgNgbAHgWQAGgUATgIQASgIAVAJQAXAKAPAaQAkBbgOBMQgNBIg1AsQg1AshNAEQhRAEhWgpQj5CGhSD4gAkwZVQgPAQAAAWIAAAJQAAAWAPAPQAQAQAWAAIINAAQAWAAAQgQQAPgPAAgWIAAgJQAAgWgPgQQgQgPgWAAIoNAAQgWAAgQAPgAneWsQgyAjgLA3QgKA1AdAsQAfAvA+AOQABhlApgqQAogpBgAAIIjAAQA6AAAqArQAtAtADBLQBvg6gihsQgNgpgegeQgcgdgZAAIr4AAQhZAAg4AngADQz1Qg9AhglBcQDBBCChgwQCmgxBLiaQhcAmhrAEIimgFIgMAAQhNAAgrAXgAkV09IB6DaQAoj6BJhyQhPijjGifQA4CQgOFEgAAw3dQiGDtASB0QBZhHBWg4QA9gnBfg3QgJjIAChBQADhuAZhBQhvBZh9Dbg");
	this.shape_28.setTransform(378.5159,52.8066,0.203,0.1668);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B1804A").s().p("AjVDaIgegMIgfgoIBOhDIANgEIAVAFIAUAMIAOAPQAoAUAggRQAhgSAOgzQAGgVAQAAQASAAACAVQAYBJAbAEQAbADAJhHQADgSAMAAQANgBAEATQAUA1AkAFQAjAFAJguQANhOgeg7Qgbg3g5gdQg3gdhDADQhEACg8AjIgEAPIgOAJIAAAJIgDAXIgJAbIgUAcIgfAUIgVAFIgRgHIgMgNIgHgTIgRgTIgcgvIgmhYQBrgSBAAtQBNg1BagJQBYgJBKAkQBMAlAlBMQAoBSgSBwIg2A0IgcAEIgogCIg4gQIgYAQIgTAHIgoAAIgXgCIgTgaIg6AeIgcAHIgaAAIghgLIg4Aog");
	this.shape_29.setTransform(400.2623,22.6371,0.203,0.1668);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// LOGOGRAMA
	this.instance = new lib.LogogramaVBase();
	this.instance.setTransform(435,19,0.0484,0.0484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// danxho
	this.instance_1 = new lib.danxho();
	this.instance_1.setTransform(283.85,538.15);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dex_alto
	this.instance_2 = new lib.dexalto();
	this.instance_2.setTransform(405.3,473.25);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// jido_de_jilo
	this.instance_3 = new lib.ejidojilo();
	this.instance_3.setTransform(215.35,501.85);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// xhimojay
	this.instance_4 = new lib.xhimojay();
	this.instance_4.setTransform(157.3,486.25);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// doxhicho
	this.instance_5 = new lib.doxhicho();
	this.instance_5.setTransform(302.8,492.65);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// cosco
	this.instance_6 = new lib.coscomate();
	this.instance_6.setTransform(356.85,490.6,1,1,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// dex_bajo
	this.instance_7 = new lib.dexbajo();
	this.instance_7.setTransform(365.15,483.45);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// denjhi
	this.instance_8 = new lib.denjhi();
	this.instance_8.setTransform(331.9,468.1);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// d_cuahtemoc
	this.instance_9 = new lib.dcuauhtemoc();
	this.instance_9.setTransform(202.65,464.05);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// teupan
	this.instance_10 = new lib.teupan();
	this.instance_10.setTransform(68.2,451.45,1,1,0,0,0,-3.6,0);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// ej_cosco
	this.instance_11 = new lib.ejcosco();
	this.instance_11.setTransform(297.05,460.5,1,1,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// magueyal
	this.instance_12 = new lib.magueyal();
	this.instance_12.setTransform(235.85,448.05);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// ej_son_lorenzo
	this.instance_13 = new lib.ejsanlorenzo();
	this.instance_13.setTransform(215.35,448.25);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// magueycitos
	this.instance_14 = new lib.magueycitos();
	this.instance_14.setTransform(168.3,442.65);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// cabecera
	this.instance_15 = new lib.cabecera();
	this.instance_15.setTransform(303.3,414.4);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// manzanas
	this.instance_16 = new lib.manzanas();
	this.instance_16.setTransform(263.85,438.5,1,1,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// rincon
	this.instance_17 = new lib.rincon();
	this.instance_17.setTransform(122.4,424.1);
	new cjs.ButtonHelper(this.instance_17, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// sl_octeyuco
	this.instance_18 = new lib.sn_lorenzo();
	this.instance_18.setTransform(186.8,429.3);
	new cjs.ButtonHelper(this.instance_18, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// xhixhata
	this.instance_19 = new lib.xhixhata();
	this.instance_19.setTransform(285.3,424.3);
	new cjs.ButtonHelper(this.instance_19, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// oct2000
	this.instance_20 = new lib.oct2000();
	this.instance_20.setTransform(205.1,422.5);
	new cjs.ButtonHelper(this.instance_20, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// canalejas
	this.instance_21 = new lib.canalejas();
	this.instance_21.setTransform(190.85,394.05);
	new cjs.ButtonHelper(this.instance_21, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// huertas
	this.instance_22 = new lib.huertas();
	this.instance_22.setTransform(266.95,416.05);
	new cjs.ButtonHelper(this.instance_22, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

	// agua_escondida
	this.instance_23 = new lib.agua_esc();
	this.instance_23.setTransform(236.85,402.75);
	new cjs.ButtonHelper(this.instance_23, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1));

	// llano_grande
	this.instance_24 = new lib.llanogrande();
	this.instance_24.setTransform(132.6,379.6,1,1,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.instance_24, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1));

	// sta_martha
	this.instance_25 = new lib.stamartha();
	this.instance_25.setTransform(267.05,396.65);
	new cjs.ButtonHelper(this.instance_25, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1));

	// xhitey
	this.instance_26 = new lib.xhitey();
	this.instance_26.setTransform(290.5,376.2);
	new cjs.ButtonHelper(this.instance_26, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1));

	// calpu
	this.instance_27 = new lib.calpu();
	this.instance_27.setTransform(131.65,304.65);
	new cjs.ButtonHelper(this.instance_27, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1));

	// saltillo
	this.instance_28 = new lib.saltillo();
	this.instance_28.setTransform(93.8,341.4);
	new cjs.ButtonHelper(this.instance_28, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1));

	// majuay
	this.instance_29 = new lib.majuay();
	this.instance_29.setTransform(135.75,276.95,1,1,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.instance_29, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1));

	// el_rosal
	this.instance_30 = new lib.rosal();
	this.instance_30.setTransform(96.3,237.15);
	new cjs.ButtonHelper(this.instance_30, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1));

	// san_martin
	this.instance_31 = new lib.snmartin();
	this.instance_31.setTransform(147.8,230.9);
	new cjs.ButtonHelper(this.instance_31, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1));

	// tecolapan
	this.instance_32 = new lib.tecolapan();
	this.instance_32.setTransform(215.4,196.75);
	new cjs.ButtonHelper(this.instance_32, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1));

	// maqueda
	this.instance_33 = new lib.maqueda();
	this.instance_33.setTransform(90.7,197.35);
	new cjs.ButtonHelper(this.instance_33, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1));

	// oxthoc
	this.instance_34 = new lib.oxthoc();
	this.instance_34.setTransform(316.9,173.45,1,1,0,0,0,-0.1,1.3);
	new cjs.ButtonHelper(this.instance_34, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1));

	// dedeni
	this.instance_35 = new lib.dedeni();
	this.instance_35.setTransform(159.15,171.75);
	new cjs.ButtonHelper(this.instance_35, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1));

	// loyola
	this.instance_36 = new lib.loyola();
	this.instance_36.setTransform(92.75,150.25);
	new cjs.ButtonHelper(this.instance_36, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1));

	// acazuchi
	this.instance_37 = new lib.acazu();
	this.instance_37.setTransform(211.1,90.5,1,1,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_37, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1));

	// mataxhi
	this.instance_38 = new lib.mataxhi();
	this.instance_38.setTransform(76.1,112.85,1,1,0,0,0,0.4,-0.1);
	new cjs.ButtonHelper(this.instance_38, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1));

	// nenamicoyan
	this.instance_39 = new lib.nenamicoyan();
	this.instance_39.setTransform(146.4,132.85);
	new cjs.ButtonHelper(this.instance_39, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1));

	// dguerrero
	this.instance_40 = new lib.guerrero();
	this.instance_40.setTransform(272.1,140.6,1,1,0,0,0,0,-0.1);
	new cjs.ButtonHelper(this.instance_40, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1));

	// san_pablo
	this.instance_41 = new lib.sanapblo();
	this.instance_41.setTransform(375.6,390.95);
	new cjs.ButtonHelper(this.instance_41, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1));

	// ojo_agua
	this.instance_42 = new lib.ojodeagua();
	this.instance_42.setTransform(427.05,391.95,1,1,0,0,0,-0.1,1.2);
	new cjs.ButtonHelper(this.instance_42, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1));

	// zapata
	this.instance_43 = new lib.zapata();
	this.instance_43.setTransform(318.6,120.5,1,1,0,0,0,0,0.8);
	new cjs.ButtonHelper(this.instance_43, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1));

	// aldama
	this.instance_44 = new lib.aldama();
	this.instance_44.setTransform(95.65,378.5,1,1,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.instance_44, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1));

	// huaracha
	this.instance_45 = new lib.huaracha();
	this.instance_45.setTransform(62.55,421.7);
	new cjs.ButtonHelper(this.instance_45, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1));

	// buenavista
	this.instance_46 = new lib.buenavista();
	this.instance_46.setTransform(254.75,358.8);
	new cjs.ButtonHelper(this.instance_46, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(1));

	// comunidad
	this.instance_47 = new lib.comunidad();
	this.instance_47.setTransform(229.8,343.5,1,1,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_47, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(1));

	// sn_miguel
	this.instance_48 = new lib.snmiguel();
	this.instance_48.setTransform(221.5,251.45);
	new cjs.ButtonHelper(this.instance_48, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(1));

	// mexicaltongo
	this.instance_49 = new lib.mexicalt();
	this.instance_49.setTransform(267,307.55,1,1,0,0,0,0.1,-0.2);
	new cjs.ButtonHelper(this.instance_49, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(1));

	// guiaDatos
	this.instance_50 = new lib.FichaMapitaai("synched",0);
	this.instance_50.setTransform(693.2,337,1,1,0,0,0,117,203.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(1));

	// datos_jilo
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#996600").s().p("AgvBoQgXgGgQgLIAUgnQANAKAQAFQAQAFARAAQASAAALgHQALgHAAgOQAAgagoAAIgWAAIAAggIArgzIhbAAIAAgoICWAAIAAAgIgwA4QAcAEAPARQAPAQABAYQAAATgLAQQgJAQgVAJQgUAKgcAAQgYABgVgHg");
	this.shape_30.setTransform(827.5,565.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#996600").s().p("AgwBoQgWgGgQgLIAUgnQANAKAQAFQAQAFARAAQASAAALgHQALgHAAgOQAAgagoAAIgWAAIAAggIArgzIhcAAIAAgoICXAAIAAAgIgwA4QAcAEAPARQAPAQAAAYQABATgLAQQgKAQgUAJQgUAKgdAAQgXABgWgHg");
	this.shape_31.setTransform(809.2,565.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#996600").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_32.setTransform(791.075,564.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#996600").s().p("AgaA1IAOgyQgIgCgEgHQgFgHAAgJQAAgNAJgIQAIgJAMAAQANAAAJAJQAIAIAAANQAAAGgCAHIgGARIgSAtg");
	this.shape_33.setTransform(778.325,575.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#996600").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQAMgRAAgjQAAgjgMgRQgLgRgUAAQgTAAgKARg");
	this.shape_34.setTransform(763.7,565.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#996600").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_35.setTransform(743.675,564.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#33CCFF").s().p("AgwBoQgWgGgPgLIAUgnQAMAKAQAFQAQAFARAAQASAAALgIQAKgHAAgNQAAgOgLgHQgLgIgaAAIg4AAIALh5ICDAAIAAApIhaAAIgDApIASAAQAtAAAWATQAVAQAAAfQABAUgKARQgLAQgTAKQgVAKgdgBQgXAAgWgGg");
	this.shape_36.setTransform(650.15,564.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#33CCFF").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgeg0QgLARAAAjQAAAjALARQAMASASAAQAUAAALgSQALgRAAgjQAAgjgLgRQgLgRgUAAQgSAAgMARg");
	this.shape_37.setTransform(630.65,564.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#33CCFF").s().p("Ag1BsQgQgEgLgHIASglQAQALAZAAQAbAAAQgQQAQgRABgeQgTATgiAAQgVAAgRgIQgRgIgKgPQgKgPAAgUQAAgWALgQQALgRATgJQATgIAXAAQAsAAAaAbQAaAcAAA0QAAAkgOAaQgOAbgZANQgZAOggAAQgRAAgQgEgAgehBQgKAIAAAPQAAAPAKAJQALAJAQAAQAQAAAKgJQALgJAAgPQAAgOgLgJQgKgJgQAAQgQAAgLAJg");
	this.shape_38.setTransform(609.975,564.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#33CCFF").s().p("AgaA0IAOgwQgIgEgEgFQgFgIAAgJQAAgNAJgIQAIgIAMAAQANAAAJAIQAIAIAAANQAAAHgCAFIgGASIgSAsg");
	this.shape_39.setTransform(596.375,574.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#33CCFF").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQALgRAAgjQAAgjgLgRQgLgRgUAAQgTAAgKARg");
	this.shape_40.setTransform(581.75,564.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#33CCFF").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_41.setTransform(561.725,564.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFCC00").s().p("Ag1BsQgQgEgLgHIASglQAQALAZAAQAbAAAQgQQAQgRABgeQgTATgiAAQgVAAgRgIQgRgIgKgPQgKgPAAgUQAAgWALgQQALgRATgJQATgIAXAAQAsAAAaAbQAaAcAAA0QAAAkgOAaQgOAbgZANQgZAOggAAQgRAAgQgEgAgehBQgKAIAAAPQAAAPAKAJQALAJAQAAQAQAAAKgJQALgJAAgPQAAgOgLgJQgKgJgQAAQgQAAgLAJg");
	this.shape_42.setTransform(829.275,454.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC00").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQAMgRAAgjQAAgjgMgRQgLgRgUAAQgTAAgKARg");
	this.shape_43.setTransform(809.15,454.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC00").s().p("AAQBtIAAguIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgoIAvAAIAAAoIAkAAIAAApIgkAAIAAAug");
	this.shape_44.setTransform(788.325,454.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC00").s().p("AgaA0IAOgwQgIgEgEgFQgFgIAAgJQAAgNAJgIQAIgIAMAAQANAAAJAIQAIAIAAANQAAAHgCAFIgGASIgSAsg");
	this.shape_45.setTransform(773.275,464.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFCC00").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_46.setTransform(759.675,453.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC00").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_47.setTransform(741.425,453.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_48.setTransform(647.325,453.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_49.setTransform(629.025,454.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("Ag1BsQgQgEgLgHIASglQAQALAZAAQAbAAAQgQQAQgRABgeQgTATgiAAQgVAAgRgIQgRgIgKgPQgKgPAAgUQAAgWALgQQALgRATgJQATgIAXAAQAsAAAaAbQAaAcAAA0QAAAkgOAaQgOAbgZANQgZAOggAAQgRAAgQgEgAgehBQgKAIAAAPQAAAPAKAJQALAJAQAAQAQAAAKgJQALgJAAgPQAAgOgLgJQgKgJgQAAQgQAAgLAJg");
	this.shape_50.setTransform(608.675,454.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("AgaA1IAOgyQgIgCgEgHQgFgGAAgKQAAgNAJgJQAIgIAMAAQANAAAJAIQAIAJAAANQAAAGgCAHIgGARIgSAtg");
	this.shape_51.setTransform(595.075,464.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_52.setTransform(581.475,453.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_53.setTransform(563.225,453.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1135FF").s().p("AgvBjQgVgOgMgZQgMgZAAgjQAAgiAMgaQAMgZAVgNQAVgNAaAAQAbAAAVANQAVANAMAZQAMAaAAAiQAAAjgMAZQgMAZgVAOQgVANgbAAQgaAAgVgNgAgdg0QgMARAAAjQAAAjAMARQAKASATAAQAUAAALgSQAMgRAAgjQAAgjgMgRQgLgRgUAAQgTAAgKARg");
	this.shape_54.setTransform(822.2,339.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1135FF").s().p("AgDBsIAAivIgrAAIAAgpIBdAAIAADYg");
	this.shape_55.setTransform(804.45,339.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1135FF").s().p("AgvBoQgVgIgMgPQgLgQABgUQAAgRAIgNQAJgNAPgHQgMgHgHgMQgGgLAAgPQAAgSALgOQAKgOATgIQATgHAYAAQAYAAAUAHQASAIALAOQAKAOAAASQABAPgHALQgGAMgNAHQAQAHAJANQAIANAAARQAAAUgLAQQgMAPgVAIQgUAIgbAAQgbAAgUgIgAgdAVQgLAJABAOQgBAOALAJQALAIASAAQASAAALgIQAMgJAAgOQAAgOgMgJQgLgIgSAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAKgHQAIgHABgMQgBgNgIgHQgKgIgPAAQgPAAgJAIg");
	this.shape_56.setTransform(789.35,339.125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1135FF").s().p("AgaA0IAOgwQgIgEgEgFQgFgIAAgJQAAgNAJgJQAIgHAMgBQANABAJAHQAIAJAAANQAAAHgCAFIgGASIgSAsg");
	this.shape_57.setTransform(775.075,349.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1135FF").s().p("AhMBuIAAggIBThOQANgNAFgJQAEgJAAgJQAAgNgIgHQgJgHgQAAQgPAAgLAFQgMAGgHAKIglgXQANgTAWgLQAWgKAdAAQAXAAATAHQASAIAKAPQAKAOAAAUQAAARgIAQQgHAOgVAUIgxAvIBcAAIAAApg");
	this.shape_58.setTransform(761.475,338.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1135FF").s().p("AAQBsIAAgtIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgoIAvAAIAAAoIAkAAIAAApIgkAAIAAAtg");
	this.shape_59.setTransform(742.425,339.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF66CC").s().p("AgDBsIAAivIgrAAIAAgpIBdAAIAADYg");
	this.shape_60.setTransform(652.4,340.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF66CC").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_61.setTransform(637.925,340.125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF66CC").s().p("AgvBoQgVgIgMgPQgLgQAAgUQABgRAIgNQAJgNAPgHQgMgHgGgMQgHgLAAgPQAAgSALgOQAKgOATgIQATgHAYAAQAZAAASAHQATAIALAOQALAOgBASQABAPgHALQgGAMgNAHQAQAHAJANQAJANgBARQAAAUgLAQQgMAPgVAIQgUAIgbAAQgbAAgUgIgAgdAVQgKAJAAAOQAAAOAKAJQALAIASAAQASAAALgIQAMgJAAgOQAAgOgMgJQgLgIgSAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAKgHQAJgHAAgMQAAgNgJgHQgKgIgPAAQgPAAgJAIg");
	this.shape_62.setTransform(617.55,340.125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF66CC").s().p("AgaA0IAOgwQgIgDgEgGQgFgIAAgJQAAgNAJgJQAIgHAMAAQANAAAJAHQAIAJAAANQAAAHgCAFIgGASIgSAsg");
	this.shape_63.setTransform(603.275,350.45);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF66CC").s().p("AAQBsIAAgtIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgoIAvAAIAAAoIAkAAIAAApIgkAAIAAAtg");
	this.shape_64.setTransform(588.875,340.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF66CC").s().p("AAQBsIAAgtIh0AAIAAgiIBmiJIA0AAIhdCCIA5AAIAAgoIAvAAIAAAoIAkAAIAAApIgkAAIAAAtg");
	this.shape_65.setTransform(567.525,340.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#999999").s().p("AgCBsIAAivIgsAAIAAgpIBdAAIAADYg");
	this.shape_66.setTransform(737.25,221.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#999999").s().p("AgvBsIBMiuIhHAAIAAAjIgsAAIAAhNICtAAIAAAhIhQC3g");
	this.shape_67.setTransform(722.65,221.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("Ag/BUQgagcAAg0QAAgkAOgaQAOgaAZgOQAZgNAgAAQARAAAQADQAQAEALAHIgSAlQgQgLgZAAQgaAAgRARQgQAQgBAeQATgTAiAAQAVAAARAIQARAJAKAOQAKAQAAAUQAAAVgLARQgLAQgTAJQgTAJgXAAQgsAAgagcgAgWATQgKAJAAAOQAAAOAKAJQAKAJARAAQAQAAAKgIQAKgJAAgPQAAgPgKgJQgKgIgRAAQgPAAgLAJg");
	this.shape_68.setTransform(703.575,221.125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#999999").s().p("AgaA0IAOgwQgIgEgEgGQgFgGAAgKQAAgNAJgJQAIgHAMgBQANABAJAHQAIAJAAANQAAAHgCAFIgGASIgSAsg");
	this.shape_69.setTransform(689.375,231.45);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#999999").s().p("AgvBsIBMiuIhHAAIAAAjIgsAAIAAhNICtAAIAAAhIhQC3g");
	this.shape_70.setTransform(675.6,221.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#999999").s().p("AgvBoQgVgIgMgPQgLgQAAgUQAAgRAJgNQAIgNAQgHQgMgHgGgMQgHgLAAgPQAAgSAKgOQALgOATgIQATgHAYAAQAZAAASAHQATAIALAOQALAOAAASQAAAPgHALQgGAMgNAHQAQAHAJANQAJANgBARQAAAUgMAQQgLAPgUAIQgVAIgbAAQgbAAgUgIgAgdAVQgKAJAAAOQAAAOAKAJQALAIASAAQATAAALgIQAKgJABgOQgBgOgKgJQgLgIgTAAQgSAAgLAIgAgYhDQgJAHAAANQAAAMAJAHQAJAHAPAAQAPAAAJgHQAKgHAAgMQAAgNgKgHQgJgIgPAAQgPAAgJAIg");
	this.shape_71.setTransform(655.9,221.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(479.4,310.1,438.4,329.4);
// library properties:
lib.properties = {
	id: '0B7AEC3AEFF5A04BA78CE88CB7A4226E',
	width: 960,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/LogogramaVBase.png", id:"LogogramaVBase"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0B7AEC3AEFF5A04BA78CE88CB7A4226E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;