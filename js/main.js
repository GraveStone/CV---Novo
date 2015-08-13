var videoStep = 0;
var loadedStep = 0;
var step_3_option = 0;
var videoSteps = {
                        "0" : ["media/plano0.mp4"],
                        "1" : ["media/plano1sa.mp4","media/plano2.mp4"],       
                        "2" : ["media/plano3.mp4"],
                        "3" : ["media/plano4a.mp4","media/plano4b.mp4"],
                        "4" : ["media/generico.mp4"],
                        "5" : ["media/plano5.mp4", "media/plano6.mp4"],
                        "6" : ["media/plano7.mp4"],
                        "7" : ["media/plano8.mp4"],
                        "8" : ["media/plano9.mp4"],
                        "9" : ["media/plano10.mp4"],
                        "10" : ["media/plano11.mp4"]   
                };
 
 
var myMovie = {
       
        firstBuild : function(){
                var firstStep = videoStep;
                for(; loadedStep<=2 ; loadedStep++){
                        $.each(videoSteps[loadedStep], function(index, source) {
                                var id = "movieStep_"+loadedStep+"_"+index;
                                $("#container").append(myMovie.buildHTML(id , source));
                        });
                };             
        },
        buildVideo : function(){
                var firstStep = videoStep;
                var steps = myMovie.videosCollection();
                for(;firstStep<=loadedStep;firstStep++){
                        var id = "movieStep_"+firstStep;
                        console.log(steps[firstStep]);
                       
                }
               
        },
        buildHTML : function(id , source){
 
                var frame  = '<div class = "videoPlaceholder hidden" style ="z-index:1;" id ="'+id+'">'+
                '<video class="controller">'+
                '<source src="'+source+'"></source>'+
                '</video>'+
                '</div>';
                return frame;
        },
        numberOfSteps : function(video){
                return Object.keys(video).length;
        },
        checkVideoStep : function(step){
                $("div[id^=movieStep_"+step + "]").find('video').on("timeupdate",function (event) {
                                console.log(videoStep);
$("#movieStep_"+videoStep+"_0").remove();
 
                })
        }
};
 
 
 
 
 
 
$(document).ready(function(){
        myMovie.firstBuild();
        $("#play").on("click",function(){
                $("#movieStep_"+videoStep+"_0").show().find('video')[0].play();
                $(this).hide();
                myMovie.checkVideoStep(videoStep);
                console.log(loadStep);
        })
});