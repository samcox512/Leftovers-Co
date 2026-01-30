import { animate, scroll, stagger, easeIn, delay, spring} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

$(document).ready(function() {
    $(".member-column").hover(function() {
            console.log("A")
            animate(
                "#"+$(this).attr("id")+" .bg",
                { scale: 1.1 },
                { duration: 0.5 }
            )
            
        }, function() {
            console.log("B")
            animate(
                "#"+$(this).attr("id")+" .bg",
                { scale: 1 },
                { duration: 0.5 }
            )
        })
})