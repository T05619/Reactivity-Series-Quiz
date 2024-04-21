let reactivitySeries = ['potassium', 'sodium', 'lithium', 'calcium', 'magnesium', 'aluminium', 'carbon', 'zinc', 'iron', 'hydrogen', 'copper', 'silver', 'gold', 'platinum'];

function checkElement(input) {
    input = input.toLowerCase();
    for (let i = 0; i < reactivitySeries.length; i++) {
        if (input === reactivitySeries[i]) {
            document.getElementById(reactivitySeries[i]).innerHTML = reactivitySeries[i].charAt(0).toUpperCase() + reactivitySeries[i].slice(1);
            document.getElementById(reactivitySeries[i]).style.backgroundColor = "#78FA5F"
            document.getElementById('input').value = "";
            reactivitySeries.splice(i, 1);
            if (reactivitySeries.length == 0) {
                reactivitySeries = ['potassium', 'sodium', 'lithium', 'calcium', 'magnesium', 'aluminium', 'carbon', 'zinc', 'iron', 'hydrogen', 'copper', 'silver', 'gold', 'platinum'];
                for (let textBox = 0; textBox < reactivitySeries.length; textBox++) {
                    document.getElementById(reactivitySeries[textBox]).innerHTML = "Empty";
                    if (reactivitySeries[textBox] == "carbon" || reactivitySeries[textBox] == "hydrogen") {
                        document.getElementById(reactivitySeries[textBox]).style.backgroundColor = "#F0AA00"
                    } else {
                        document.getElementById(reactivitySeries[textBox]).style.backgroundColor = "#DDDDDD"
                    }
                }
                return
            } else {
                return
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('input').addEventListener('input', function(event) {
        let valueEntered = this.value;
        if (valueEntered !== "") {
            checkElement(valueEntered);
        }
    });
});