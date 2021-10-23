let color = "";
export function progressBarColor(progress_score) {
  if (progress_score >= 75) {
    color = "#198754";
  } else if (progress_score >= 45 && progress_score < 75) {
    color = "#ffc107";
  } else {
    color = "#dc3545";
  }

  return color;
}
