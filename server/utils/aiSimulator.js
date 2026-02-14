const damages = ["scratch", "dent", "crack", "broken", "paint_damage"];
const locations = ["front", "rear", "left", "right"];
const severities = ["low", "medium", "high"];

module.exports = () => {
  return {
    damage_type: damages[Math.floor(Math.random() * damages.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    severity: severities[Math.floor(Math.random() * severities.length)],
    confidence: (Math.random() * (0.99 - 0.7) + 0.7).toFixed(2),
  };
};
