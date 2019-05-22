module.exports = function main(inputs) {
    var distance_fee, wait_fee, total_fee;

    if (inputs.distance <= 2)
        distance_fee = 6
    else if (inputs.distance > 2 && inputs.distance <= 8)
        distance_fee = 6 + 0.8 * (inputs.distance - 2)
    else
        distance_fee = 6 + 0.8 * (8 - 2) + 0.8 * (1 + 0.5) * (inputs.distance - 8)
    
    wait_fee = inputs.parkTime * 0.25
    total_fee = Math.round(distance_fee + wait_fee)
    return total_fee;
};
