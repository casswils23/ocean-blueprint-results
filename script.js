const fallback = {
  meta: { respondents: 6, dateRange: "July 21–August 17, 2026" },
  heroStats: [], focusAreas: [], rioOutcomes: [], barriers: [], commitments: [], successMetrics: [],
  workshop: { body: "" }, takeaway: { body: "" }
};

function renderBars(containerId, items, maxCount = 6) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map(item => {
    const width = Math.max(0, Math.min(100, (item.count / maxCount) * 100));
    return `
      <div class="bar-row">
        <div class="bar-label">
          <span>${item.label}</span>
          <span>${item.count} of ${maxCount}</span>
        </div>
        <div class="bar-track" aria-hidden="true">
          <div class="bar-fill" style="width:${width}%"></div>
        </div>
      </div>`;
  }).join("");
}

function render(data) {
  const n = data.meta.respondents;
  document.getElementById("respondent-count").textContent = `${n} unique respondents`;
  document.getElementById("date-range").textContent = data.meta.dateRange;

  document.getElementById("hero-stats").innerHTML = data.heroStats.map(stat => `
    <div class="hero-stat">
      <strong>${stat.value}</strong>
      <span>${stat.label}</span>
    </div>`).join("");

  renderBars("focus-chart", data.focusAreas, n);
  renderBars("barriers-chart", data.barriers, n);
  renderBars("success-chart", data.successMetrics, n);

  document.getElementById("rio-cards").innerHTML = data.rioOutcomes.map(card => `
    <article class="result-card">
      <p class="card-eyebrow">${card.eyebrow}</p>
      <h3>${card.title}</h3>
      <p>${card.detail}</p>
    </article>`).join("");

  document.getElementById("commitments-grid").innerHTML = data.commitments.map(item => `
    <article class="stat-card">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </article>`).join("");

  document.getElementById("workshop-copy").textContent = data.workshop.body;
  document.getElementById("takeaway-copy").textContent = data.takeaway.body;
  document.getElementById("methodology-note").textContent = data.meta.note + " Results are presented as counts because the current sample is small.";
}

fetch("results.json")
  .then(response => {
    if (!response.ok) throw new Error("Could not load survey summary.");
    return response.json();
  })
  .then(render)
  .catch(error => {
    console.error(error);
    render(fallback);
  });
