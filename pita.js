
        function calculateHypotenuse() {
            const a = parseFloat(document.getElementById("sideA").value);
            const b = parseFloat(document.getElementById("sideB").value);

            if (isNaN(a) || isNaN(b)) {
                document.getElementById("result").innerText = "Kérjük, érvényes számokat adjon meg.";
                return;
            }

            const c = Math.sqrt(a * a + b * b);
            document.getElementById("result").innerText = `Az átfogó hossza: ${c.toFixed(2)}`;
        }