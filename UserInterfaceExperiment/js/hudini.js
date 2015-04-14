/**
 * Created by renzodiaz on 4/13/15.
 */
function show(id) {
    var e = document.getElementById(id);
    e.style.display = 'block';
    return false;
}

function hide(id) {
    var e = document.getElementById(id);
    e.style.display = 'none';
}