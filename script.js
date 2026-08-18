document.addEventListener("DOMContentLoaded", () => {
  const data = {
    heroStats: [
      {
        value: "83%",
        label: "prioritize sustained ocean observations"
      },
      {
        value: "67%",
        label: "identify sustained funding as a major barrier"
      },
      {
        value: "67%",
        label: "say success should include greater use of prediction and decision-support services"
      }
    ],

    focusAreas: [
      { label: "Sustained ocean observations", percent: 83 },
      { label: "Data access & interoperability", percent: 67 },
      { label: "Capacity & workforce", percent: 50 },
      { label: "Policy & management applications", percent: 50 },
      { label: "Prediction & forecasting", percent: 33 },
      { label: "Emerging technologies", percent: 17 }
    ],

    rioOutcomes: [
      {
        eyebrow: "Scale",
        title: "Build on solutions that already work",
        detail: "67% selected existing and emerging solutions that can be scaled."
      },
      {
        eyebrow: "Align",
        title: "Create a shared view of priority needs",
        detail: "50% want the Blueprint to establish a shared assessment of priorities."
      },
      {
        eyebrow: "Act",
        title: "Define implementation pathways",
        detail: "50% selected clear implementation pathways for 2027–2030."
      }
    ],

    barriers: [
      { label: "Insufficient sustained funding", percent: 67 },
      { label: "Limited observing coverage", percent: 50 },
      { label: "Lack of interoperability", percent: 50 },
      { label: "Insufficient coordination", percent: 33 },
      { label: "Weak connection to decision-making", percent: 33 }
    ],

    commitments: [
      {
        value: "67%",
        label: "Connect local, regional, national, or sectoral communities"
      },
      {
        value: "67%",
        label: "Help sustain Decade activities or Communities of Practice beyond 2030"
      },
      {
        value: "50%",
        label: "Provide access to observing, data, prediction, service, or digital infrastructure"
      },
      {
        value: "50%",
        label: "Support capacity development, training, mentoring, or technical assistance"
      }
    ],

    successMetrics: [
      {
        label: "Greater use of prediction, forecasting, or decision-support services",
        percent: 67
      },
      {
        label: "Expanded observing coverage in priority regions",
        percent: 50
      },
      {
        label: "Evidence of uptake by policy, planning, management, or investment audiences",
        percent: 50
      },
      {
        label: "Increased access to interoperable and trusted data",
        percent: 33
      },
      {
        label: "Financing, infrastructure, or in-kind commitments secured",
        percent: 33
      }
    ],

    workshop:
      "Preferences are split across hybrid sessions linked to existing events, regional or time-zone-based online sessions, small expert groups, and a combined online-plus-synthesis approach. A flexible, multi-format process may serve the group best.",

    takeaway:
      "Across the responses, the clearest through-line is the need to connect sustained observations to interoperable data, prediction, services, and decisions, while building the partnerships, capacity, and funding needed to sustain that work.",

    methodology:
      "These early findings summarize the current input received. Where the same person submitted more than once, only the most recent submission is used. Percentages are rounded to the nearest whole percent."
  };

  function get(id) {
    return document.getElementById(id);
  }

  function renderBars(containerId, items) {
    const container = get(containerId);

    if (!container) {
      return;
    }

    container.innerHTML = items.map(item => `
      <div class="bar-row">
        <div class="bar-label">
          <span>${item.label}</span>
          <span><strong>${item.percent}%</strong></span>
        </div>

        <div class="bar-track" aria-hidden="true">
          <div
            class="bar-fill"
            style="width: ${item.percent}%"
          ></div>
        </div>
      </div>
    `).join("");
  }

  const respondentCount = get("respondent-count");

  if (respondentCount) {
    respondentCount.textContent = "Early input";
  }

  const dateRange = get("date-range");

  if (dateRange) {
    dateRange.textContent = "July 21-August 17, 2026";
  }

  const heroStats = get("hero-stats");

  if (heroStats) {
    heroStats.innerHTML = data.heroStats.map(stat => `
      <div class="hero-stat">
        <strong>${stat.value}</strong>
        <span>${stat.label}</span>
      </div>
    `).join("");
  }

  renderBars("focus-chart", data.focusAreas);
  renderBars("barriers-chart", data.barriers);
  renderBars("success-chart", data.successMetrics);

  const rioCards = get("rio-cards");

  if (rioCards) {
    rioCards.innerHTML = data.rioOutcomes.map(card => `
      <article class="result-card">
        <p class="card-eyebrow">${card.eyebrow}</p>
        <h3>${card.title}</h3>
        <p>${card.detail}</p>
      </article>
    `).join("");
  }

  const commitments = get("commitments-grid");

  if (commitments) {
    commitments.innerHTML = data.commitments.map(item => `
      <article class="stat-card">
        <strong>${item.value}</strong>
        <span>${item.label}</span>
      </article>
    `).join("");
  }

  const workshopCopy = get("workshop-copy");

  if (workshopCopy) {
    workshopCopy.textContent = data.workshop;
  }

  const takeawayCopy = get("takeaway-copy");

  if (takeawayCopy) {
    takeawayCopy.textContent = data.takeaway;
  }

  const methodologyNote = get("methodology-note");

  if (methodologyNote) {
    methodologyNote.textContent = data.methodology;
  }
});
