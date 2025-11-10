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