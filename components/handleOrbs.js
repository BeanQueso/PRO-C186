AFRAME.registerComponent("handle-orbs", {
    init: function () {
        this.spawnOrb()
        box2 = document.querySelector("#box")
        
        var camera = document.querySelector("#camera").object3D
        var direction = new THREE.Vector3()
        camera.getWorldDirection(direction)
        
    },

    spawnOrb: function () {
        var xvalue = Math.floor(Math.random() * 7)
        var yvalue = Math.floor(Math.random() * 3)

        var box2 = document.createElement("a-sphere")
        box2.setAttribute("position", { x: xvalue - 3, y: yvalue + 1, z: -5.6 })
        box2.setAttribute("geometry", { radius: 0.3 })
        box2.setAttribute("id", "box")
        box2.setAttribute("color", "black")
        box2.setAttribute("class", "other")

        var sceneEl = document.querySelector("#scene")
        sceneEl.appendChild(box2)
    },

    killOrb: function(){
        box2 = document.querySelector("#box")
        box2.remove()

        var xvalue = Math.floor(Math.random() * 7)
        var yvalue = Math.floor(Math.random() * 3)

        var box2 = document.createElement("a-sphere")
        box2.setAttribute("position", { x: xvalue - 3, y: yvalue + 1, z: -5.6 })
        box2.setAttribute("geometry", { radius: 0.3 })
        box2.setAttribute("id", "box")
        box2.setAttribute("color", "black")
        box2.setAttribute("class", "other")

        var sceneEl = document.querySelector("#scene")
        sceneEl.appendChild(box2)
    }

})