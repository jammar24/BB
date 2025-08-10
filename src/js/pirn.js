function createPetalEffect(flowerElement, isHug, count = 12) {
            const flowerRect = flowerElement.getBoundingClientRect();
            const startX = flowerRect.left + flowerRect.width / 2;
            const startY = flowerRect.top + flowerRect.height / 2 - 20;
            const windowHeight = window.innerHeight;
            
            for (let i = 0; i < count; i++) {
                setTimeout(() => {
                    const petal = document.createElement('div');
                    petal.className = `petal ${isHug ? 'hug' : 'kiss'}`;
                    
                    petal.style.left = `${startX - 15}px`;
                    petal.style.top = `${startY - 15}px`;
                    
                    const duration = 2 + Math.random() * 2;
                    const endX = (Math.random() - 0.5) * 300;
                    const endY = windowHeight + 50;
                    const delay = Math.random() * 0.5;
                    const size = 20 + Math.random() * 20;
                    
                    petal.style.setProperty('--end-x', `${endX}px`);
                    petal.style.setProperty('--end-y', `${endY}px`);
                    petal.style.width = `${size}px`;
                    petal.style.height = `${size}px`;
                    petal.style.animationDuration = `${duration}s`;
                    petal.style.animationDelay = `${delay}s`;
                    
                    document.body.appendChild(petal);
                    
                    setTimeout(() => {
                        petal.remove();
                    }, (duration + delay) * 1000);
                }, i * 150);
            }
        }
        
        // Control del video
        function setupVideo() {
            const playButton = document.getElementById('playButton');
            const videoFrame = document.getElementById('videoFrame');
            const thumbnail = document.querySelector('.video-thumbnail');
            
            playButton.addEventListener('click', function() {
                thumbnail.style.display = 'none';
                playButton.style.display = 'none';
                videoFrame.style.display = 'block';
                videoFrame.src += "&autoplay=1";
            });
            
            // Soporte para móviles
            playButton.addEventListener('touchstart', function(e) {
                e.preventDefault();
                thumbnail.style.display = 'none';
                playButton.style.display = 'none';
                videoFrame.style.display = 'block';
                videoFrame.src += "&autoplay=1";
            });
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            // Configurar flores
            const hugFlower = document.getElementById('hugFlower');
            const kissFlower = document.getElementById('kissFlower');
            
            const addFlowerEvents = (flower, isHug) => {
                flower.addEventListener('mouseenter', function() {
                    createPetalEffect(flower, isHug, 8);
                });
                
                flower.addEventListener('click', function() {
                    createPetalEffect(flower, isHug, 15);
                });
                
                flower.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    createPetalEffect(flower, isHug, 15);
                });
            };
            
            addFlowerEvents(hugFlower, true);
            addFlowerEvents(kissFlower, false);
            
            // Configurar video
            setupVideo();
            
            // Efecto de carga para el mensaje
            const message = document.querySelector('.message');
            message.style.opacity = '0';
            message.style.transform = 'translateY(20px)';
            setTimeout(() => {
                message.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                message.style.opacity = '1';
                message.style.transform = 'translateY(0)';
            }, 300);
            
            // Disparar algunos pétalos al cargar
            setTimeout(() => {
                createPetalEffect(kissFlower, false, 5);
                setTimeout(() => {
                    createPetalEffect(hugFlower, true, 5);
                }, 800);
            }, 1500);
        });
  
