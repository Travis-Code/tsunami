var Tsunami = Tsunami || {};

Tsunami.GameState = {

    create: function() {
        this.catAlive = true;
        this.loadLevel();
    },

    update: function() {
        this.game.physics.arcade.collide(this.monsters, this.tsunami);
        if (this.catAlive) {
            this.game.physics.arcade.overlap(this.monsters, this.tsunami, null, function() {
                console.log('tsunami hit the cat!');
                this.catAlive = false;
            },this);
        }
    },

    loadLevel: function() {
        //parse json file which loads the level data.
        this.levelData = JSON.parse(this.game.cache.getText("level"));
     
        //add cats.
        this.cats = this.add.group();
        var cats = new Tsunami.Cats(this.game, 700, this.game.height / 2, "cat", undefined, 800, 90);
        cats.animations.add("catWalk", [0, 1], 4, true);
        cats.play("catWalk");
        this.cats.add(cats);
      
        //add tsunami.
        this.tsunami = this.add.sprite(-300, this.game.height/4, "tsunami");
        this.game.physics.arcade.enable(this.tsunami);
        this.tsunami.body.allowGravity = false;
        this.tsunami.immovable = false;
        this.tsunami.scale.setTo(0.8);   
        this.tsunami.body.velocity.x = this.levelData.tsunamiSpeed+120;
       
        //tween for Tsunami that makes it look like a weird slug. need to mess around with properties.
        var tsunamiTween = this.game.add.tween(this.tsunami).to({
            width: 400,
            height: 1000
        }, 3150, "Linear", true, 0, -1);
        //yoyo method gives yoyo effect plays forward then reverses if set to true.
        //if yoyo method is set to false it will repeat without reversing.
        tsunamiTween.yoyo(true);
    },
};