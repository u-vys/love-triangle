/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var i, k, n, count = 0;
    for (i = 0; i < preferences.length; i++) {
        if (icValidLover(preferences, i)) {
            k = preferences[i];
            if (icValidLover(preferences, k - 1)) {
                n = preferences[k - 1];
                if (preferences[n - 1] === (i + 1)) {
                    count++;
                }
            }
        }
    }
    return count / 3;
}

function icValidLover(preferences = [], index) {
    if (preferences[index] > 0 && preferences[index] <= preferences.length && preferences[index] !== index + 1) {
        return true;
    }
    else return false;
}

