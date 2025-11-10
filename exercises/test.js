 const scores = {};

        function normalizeString(str) {
            return str.toLowerCase().trim().replace(/\s+/g, '');
        }

        function generatePairKey(name1, name2) {
            const n1 = normalizeString(name1);
            const n2 = normalizeString(name2);
            return [n1, n2].sort().join('|');
        }

        function calculateScore(name1, name2) {
            const combined = name1 + name2;
            let hash = 0;
            for (let i = 0; i < combined.length; i++) {
                hash = ((hash << 5) - hash) + combined.charCodeAt(i);
                hash = hash & hash;
            }
            return Math.abs(hash % 101);
        }


        function getMessage(score) {
            if (score >= 90) return "🔥 Absolutely perfect match! You two are soulmates destined to be together. The chemistry is off the charts!";
            if (score >= 80) return "💕 Amazing compatibility! You share a deep connection and understanding. This relationship has incredible potential!";
            if (score >= 70) return "💖 Great match! You complement each other beautifully. With effort and care, this could be something truly special.";
            if (score >= 60) return "💗 Good compatibility! You have a solid foundation for a loving relationship. Communication will strengthen your bond.";
            if (score >= 50) return "💝 Moderate match. Every relationship takes work, and you two can build something meaningful together with dedication.";
            if (score >= 30) return "💌 Friendship potential is strong! Sometimes the best relationships start as great friendships.";
            return "💫 Opposites attract! While the compatibility score is low, love can surprise us in unexpected ways.";
        }



        function createFloatingHearts() {
            const container = document.getElementById('floatingHearts');
            const hearts = ['💕', '💖', '💗', '💘', '💝', '❤️'];
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'celebration-heart';
                    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.top = '100%';
                    container.appendChild(heart);

                    gsap.to(heart, {
                        y: -window.innerHeight - 100,
                        x: (Math.random() - 0.5) * 200,
                        rotation: Math.random() * 360,
                        opacity: 1,
                        duration: 3 + Math.random() * 2,
                        ease: 'power1.out',
                        onComplete: () => heart.remove()
                    });
                }, i * 100);
            }
        }





        function calculateLove() {
            const name1 = document.getElementById('name1').value.trim();
            const name2 = document.getElementById('name2').value.trim();

            if (!name1 || !name2) {
                alert('Please enter both names! 💕');
                return;
            }

            const inputSection = document.getElementById('inputSection');
            const loadingSection = document.getElementById('loadingSection');
            const resultSection = document.getElementById('resultSection');

            gsap.to(inputSection, {
                opacity: 0,
                scale: 0.9,
                duration: 0.5,
                onComplete: () => {
                    inputSection.style.display = 'none';
                    loadingSection.style.display = 'block';
                    
                    gsap.fromTo(loadingSection, 
                        { opacity: 0, scale: 0.8 },
                        { opacity: 1, scale: 1, duration: 0.5 }
                    );

                    const heartLoader = document.getElementById('heartLoader');
                    const loadingTexts = [
                        'Reading your hearts...',
                        'Analyzing compatibility...',
                        'Calculating chemistry...',
                        'Almost there...'
                    ];
                    
                    gsap.to(heartLoader, {
                        scale: 1.3,
                        rotation: 360,
                        duration: 0.8,
                        repeat: -1,
                        yoyo: true,
                        ease: 'power1.inOut'
                    });

                    let textIndex = 0;
                    const textInterval = setInterval(() => {
                        document.getElementById('loadingText').textContent = loadingTexts[textIndex];
                        textIndex = (textIndex + 1) % loadingTexts.length;
                    }, 800);

                    setTimeout(() => {
                        clearInterval(textInterval);
                        showResult(name1, name2);
                    }, 3500);
                }
            });
        }





        function showResult(name1, name2) {
            const loadingSection = document.getElementById('loadingSection');
            const resultSection = document.getElementById('resultSection');
            
            const pairKey = generatePairKey(name1, name2);
            let score;
            
            if (scores[pairKey]) {
                score = scores[pairKey];
            } else {
                score = calculateScore(normalizeString(name1), normalizeString(name2));
                scores[pairKey] = score;
            }

            gsap.to(loadingSection, {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                onComplete: () => {
                    loadingSection.style.display = 'none';
                    resultSection.style.display = 'block';

                    document.getElementById('coupleNames').textContent = `${name1} 💕 ${name2}`;
                    document.getElementById('message').textContent = getMessage(score);

                    gsap.fromTo(resultSection,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.8 }
                    );

                    gsap.fromTo('.score-circle',
                        { scale: 0, rotation: -180 },
                        { 
                            scale: 1, 
                            rotation: 0, 
                            duration: 1, 
                            ease: 'back.out(1.7)',
                            delay: 0.3
                        }
                    );

                    const scoreElement = document.getElementById('scoreNumber');
                    gsap.to({ val: 0 }, {
                        val: score,
                        duration: 2,
                        delay: 0.8,
                        onUpdate: function() {
                            scoreElement.textContent = Math.round(this.targets()[0].val);
                        }
                    });

                    if (score >= 70) {
                        setTimeout(createFloatingHearts, 1000);
                    }
                }
            });
        }




        function resetCalculator() {
            const resultSection = document.getElementById('resultSection');
            const inputSection = document.getElementById('inputSection');

            gsap.to(resultSection, {
                opacity: 0,
                scale: 0.9,
                duration: 0.5,
                onComplete: () => {
                    resultSection.style.display = 'none';
                    inputSection.style.display = 'block';
                    
                    document.getElementById('name1').value = '';
                    document.getElementById('name2').value = '';

                    gsap.fromTo(inputSection,
                        { opacity: 0, scale: 0.9 },
                        { opacity: 1, scale: 1, duration: 0.5 }
                    );
                }
            });
        }