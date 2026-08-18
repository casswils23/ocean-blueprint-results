document.addEventListener("DOMContentLoaded", () => {

  /*
   * Percentages are based on unique respondents.
   * Where someone submitted more than once,
   * only their most recent response is included.
   *
   * Values are rounded to the nearest whole percent.
   */

  const results = {

    /*
     * QUESTION 1
     * Core Focus Areas
     */

    q1: [

      {
        label:
          "Sustained ocean observations & observing infrastructure",
        percent: 83
      },

      {
        label:
          "Data access, sharing, standards & interoperability",
        percent: 67
      },

      {
        label:
          "Capacity development, training & workforce",
        percent: 50
      },

      {
        label:
          "Applications for policy, planning & management",
        percent: 50
      },

      {
        label:
          "Prediction, forecasting & decision-support services",
        percent: 33
      },

      {
        label:
          "Emerging technologies, AI, digital twins & autonomous systems",
        percent: 17
      }

    ],


    /*
     * QUESTION 2
     * Priority Outcomes for Rio 2027
     */

    q2: [

      {
        label:
          "Existing and emerging solutions that can be scaled",
        percent: 67
      },

      {
        label:
          "A shared assessment of priority needs",
        percent: 50
      },

      {
        label:
          "A concise description of major barriers",
        percent: 50
      },

      {
        label:
          "Implementation pathways for 2027–2030",
        percent: 50
      },

      {
        label:
          "Concrete partner commitments",
        percent: 33
      },

      {
        label:
          "Partnership, capacity, resource & investment opportunities",
        percent: 33
      },

      {
        label:
          "A clear statement of benefits to different sectors",
        percent: 17
      }

    ],


    /*
     * QUESTION 3
     * Key Barriers
     */

    q3: [

      {
        label:
          "Insufficient sustained funding",
        percent: 67
      },

      {
        label:
          "Limited observing coverage in priority regions",
        percent: 50
      },

      {
        label:
          "Lack of interoperability across observing, data & prediction systems",
        percent: 50
      },

      {
        label:
          "Insufficient coordination across partners, programmes & regions",
        percent: 33
      },

      {
        label:
          "Weak connection to policy, planning, investment & decision-making",
        percent: 33
      },

      {
        label:
          "Fragmented or inaccessible data systems",
        percent: 17
      },

      {
        label:
          "Inconsistent data standards, metadata & formats",
        percent: 17
      },

      {
        label:
          "Limited access to infrastructure, technology or technical support",
        percent: 17
      },

      {
        label:
          "Limited capacity, training or workforce availability",
        percent: 17
      }

    ],


    /*
     * QUESTION 4
     * Partner Commitments
     */

    q4: [

      {
        label:
          "Connections to local, regional, national or sectoral communities",
        percent: 67
      },

      {
        label:
          "Support for sustaining Decade activities or Communities of Practice beyond 2030",
        percent: 67
      },

      {
        label:
          "Access to observing, data, prediction, service or digital infrastructure",
        percent: 50
      },

      {
        label:
          "Capacity development, training, mentoring or technical assistance",
        percent: 50
      },

      {
        label:
          "Case studies, tools, datasets, technical methods or lessons learned",
        percent: 33
      },

      {
        label:
          "Staff time to help develop or implement solutions",
        percent: 17
      }

    ],


    /*
     * QUESTION 5
     * Metrics for Success
     */

    q5: [

      {
        label:
          "Improved use of prediction, forecasting or decision-support services",
        percent: 67
      },

      {
        label:
          "Expanded observing coverage in priority regions",
        percent: 50
      },

      {
        label:
          "Evidence of uptake by policy, planning, management or investment audiences",
        percent: 50
      },

      {
        label:
          "Increased access to interoperable and trusted data",
        percent: 33
      },

      {
        label:
          "Financing, infrastructure or in-kind commitments secured",
        percent: 33
      },

      {
        label:
          "Inclusion of underrepresented regions, communities & knowledge holders",
        percent: 17
      },

      {
        label:
          "Pathways for continued collaboration",
        percent: 17
      },

      {
        label:
          "Capacity development activities delivered",
        percent: 17
      },

      {
        label:
          "Sustained Communities of Practice beyond 2030",
        percent: 17
      }

    ]

  };


  /*
   * Render one horizontal bar chart.
   */

  function renderChart(elementId, items) {

    const container =
      document.getElementById(elementId);

    if (!container) {
      return;
    }

    container.innerHTML =
      items
        .map(item => {

          return `

            <div class="bar-row">

              <div class="bar-label">

                <span>
                  ${item.label}
                </span>

                <span class="bar-value">
                  ${item.percent}%
                </span>

              </div>

              <div
                class="bar-track"
                role="img"
                aria-label="${item.label}: ${item.percent}%"
              >

                <div
                  class="bar-fill"
                  style="width: ${item.percent}%"
                ></div>

              </div>

            </div>

          `;

        })
        .join("");

  }


  /*
   * Build all five survey charts.
   */

  renderChart(
    "q1-chart",
    results.q1
  );

  renderChart(
    "q2-chart",
    results.q2
  );

  renderChart(
    "q3-chart",
    results.q3
  );

  renderChart(
    "q4-chart",
    results.q4
  );

  renderChart(
    "q5-chart",
    results.q5
  );

});
