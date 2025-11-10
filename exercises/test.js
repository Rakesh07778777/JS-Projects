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
        } const scores = {};

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
        } const scores = {};

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
        } const scores = {};

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
        } const scores = {};

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