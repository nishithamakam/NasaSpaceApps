/*let move_speed = 3, grativy = 0.5;
let bird = document.querySelector('.bird');
let img = document.getElementById('bird-1');
let sound_point = new Audio('sounds effect/point.mp3');
let sound_die = new Audio('sounds effect/die.mp3');

// getting bird element properties
let bird_props = bird.getBoundingClientRect();

// This method returns DOMReact -> top, right, bottom, left, x, y, width and height
let background = document.querySelector('.background').getBoundingClientRect();

let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');

let game_state = 'Start';
img.style.display = 'none';
message.classList.add('messageStyle');

document.addEventListener('keydown', (e) => {
    
    if(e.key == 'Enter' && game_state != 'Play'){
        document.querySelectorAll('.pipe_sprite').forEach((e) => {
            e.remove();
        });
        img.style.display = 'block';
        bird.style.top = '40vh';
        game_state = 'Play';
        message.innerHTML = '';
        score_title.innerHTML = 'Score : ';
        score_val.innerHTML = '0';
        message.classList.remove('messageStyle');
        play();
    }
});

function play(){
    function move(){
        if(game_state != 'Play') return;

        let pipe_sprite = document.querySelectorAll('.pipe_sprite');
        pipe_sprite.forEach((element) => {
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if(pipe_sprite_props.right <= 0){
                element.remove();
            }else{
                if(bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width > pipe_sprite_props.left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top){
                    game_state = 'End';
                    message.innerHTML = 'Game Over'.fontcolor('red') + '<br>Press Enter To Restart';
                    message.classList.add('messageStyle');
                    img.style.display = 'none';
                    sound_die.play();
                    return;
                }else{
                    if(pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + move_speed >= bird_props.left && element.increase_score == '1'){
                        score_val.innerHTML =+ score_val.innerHTML + 1;
                        sound_point.play();
                    }
                    element.style.left = pipe_sprite_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    let bird_dy = 0;
    function apply_gravity(){
        if(game_state != 'Play') return;
        bird_dy = bird_dy + grativy;
        document.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
                img.src = 'images1/james_tel6.jpg';
                bird_dy = -7.6;
            }
        });

        document.addEventListener('keyup', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
                img.src = 'images1/james_tel5.png';
            }
        });

        if(bird_props.top <= 0 || bird_props.bottom >= background.bottom){
            game_state = 'End';
            message.style.left = '28vw';
            window.location.reload();
            message.classList.remove('messageStyle');
            return;
        }
        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);

    let pipe_seperation = 0;

    let pipe_gap = 35;

    function create_pipe(){
        if(game_state != 'Play') return;

        if(pipe_seperation > 115){
            pipe_seperation = 0;

            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe_sprite_inv = document.createElement('div');
            pipe_sprite_inv.className = 'pipe_sprite';
            pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
            pipe_sprite_inv.style.left = '100vw';

            document.body.appendChild(pipe_sprite_inv);
            let pipe_sprite = document.createElement('div');
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';
            pipe_sprite.increase_score = '1';

            document.body.appendChild(pipe_sprite);
        }
        pipe_seperation++;
        requestAnimationFrame(create_pipe);

    }
    requestAnimationFrame(create_pipe);

    let asteroid_separation = 0;

    function create_asteroid() {
        if (game_state !== 'Play') return;
    
        if (asteroid_separation > 100) { // Adjust the separation based on your needs
            asteroid_separation = 0;
    
            let asteroid_pos_x = Math.floor(Math.random() * window.innerWidth); // Random X position
            let asteroid_pos_y = Math.floor(Math.random() * window.innerHeight); // Random Y position
            
            let asteroid = document.createElement('div');
            asteroid.className = 'asteroid';
            asteroid.style.left = asteroid_pos_x + 'px';
            asteroid.style.top = asteroid_pos_y + 'px';
    
            document.body.appendChild(asteroid);
        }
    
        asteroid_separation++;
        requestAnimationFrame(create_asteroid);
    }
    
    requestAnimationFrame(create_asteroid);
}*/


let move_speed = 5;
let telescope = document.querySelector('.bird');
let img = document.getElementById('bird-1');
let sound_point = new Audio('sounds effect/point.mp3');
let sound_die = new Audio('sounds_effect/die.mp3');

// getting telescope element properties
let telescope_props = telescope.getBoundingClientRect();

let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let game_state = 'Start';
img.style.display = 'none';
message.classList.add('messageStyle');

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && game_state !== 'Play') {
        document.querySelectorAll('.asteroid').forEach((asteroid) => {
            asteroid.remove();
        });
        img.style.display = 'block';
        telescope.style.top = '50vh';
        telescope.style.left = '10vw';
        game_state = 'Play';
        message.innerHTML = '';
        score_val.innerHTML = '0';
        message.classList.remove('messageStyle');
        play();
    }
    if (game_state === 'Play') {
        if (e.key === 'ArrowLeft') {
            move_telescope(-move_speed); // Move left
        } else if (e.key === 'ArrowRight') {
            move_telescope(move_speed); // Move right
        }else if (e.key === 'ArrowUp') {
            move_telescope(0, -move_speed); // Move up
        } else if (e.key === 'ArrowDown') {
            move_telescope(0, move_speed); // Move down
        }
    }
});
function move_telescope(dx, dy) {
    const newLeft = telescope_props.left + dx;
    const newTop = telescope_props.top + dy;

    // Limit telescope movement within the window boundaries
    const maxX = window.innerWidth - telescope_props.width;
    const maxY = window.innerHeight - telescope_props.height;

    if (newLeft >= 0 && newLeft <= maxX) {
        telescope.style.left = newLeft + 'px';
    }

    if (newTop >= 0 && newTop <= maxY) {
        telescope.style.top = newTop + 'px';
    }

    telescope_props = telescope.getBoundingClientRect();
}


function play() {
    function move() {
        if (game_state !== 'Play') return;

        let asteroids = document.querySelectorAll('.asteroid');
        asteroids.forEach((asteroid) => {
            let asteroid_props = asteroid.getBoundingClientRect();
            telescope_props = telescope.getBoundingClientRect();

            if (asteroid_props.right <= 0) {
                asteroid.remove();
            } else {
                if (
                    telescope_props.left < asteroid_props.left + asteroid_props.width &&
                    telescope_props.left + telescope_props.width > asteroid_props.left &&
                    telescope_props.top < asteroid_props.top + asteroid_props.height &&
                    telescope_props.top + telescope_props.height > asteroid_props.top
                ) {
                    game_state = 'End';
                    message.innerHTML = 'Game Over'.fontcolor('red') + '<br>Press Enter To Restart';
                    message.classList.add('messageStyle');
                    img.style.display = 'none';
                    sound_die.play();
                    return;
                } else {
                    asteroid.style.left = asteroid_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    let telescope_dy = 0;
    function apply_gravity() {
        if (game_state !== 'Play') return;

        if (telescope_props.top <= 0 || telescope_props.bottom >= window.innerHeight) {
            game_state = 'End';
            message.style.left = '28vw';
            message.classList.remove('messageStyle');
            return;
        }
        telescope.style.top = telescope_props.top + telescope_dy + 'px';
        telescope_props = telescope.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);

    let asteroid_separation = 0;

    function create_asteroid() {
        if (game_state !== 'Play') return;

        if (asteroid_separation > 100) {
            asteroid_separation = 0;

            let asteroid_pos_x = Math.floor(Math.random() * window.innerWidth);
            let asteroid_pos_y = Math.floor(Math.random() * window.innerHeight);

            let asteroid = document.createElement('div');
            asteroid.className = 'asteroid';

            const randomAsteroidNumber = Math.floor(Math.random() * 4) + 1;
            asteroid.style.backgroundImage = `url('images/asteroid${randomAsteroidNumber}.png')`;

            asteroid.style.left = asteroid_pos_x + 'px';
            asteroid.style.top = asteroid_pos_y + 'px';

            document.body.appendChild(asteroid);
        }

        asteroid_separation++;
        requestAnimationFrame(create_asteroid);
    }

    requestAnimationFrame(create_asteroid);
    
    
}


 