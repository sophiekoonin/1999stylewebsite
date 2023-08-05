let cursor;
window.onload = () => {
  cursor = new cursoreffects.fairyDustCursor({
    colors: ["#F5B5FC", "#96F7D2", "#FCB1B1"],
  });
  if (window.goatcounter) {
    window.goatcounter.visit_count({ append: "#counter", no_branding: true });
  }
};
