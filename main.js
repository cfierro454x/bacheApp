const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    reports: [],
    iconClasses: {
      Bache: { "fas fa-car-crash fa-7x": true },
      Luz: { "fas fa-lightbulb fa-7x": true },
      Semaforo: { "fas fa-traffic-light fa-7x": true },
      "Arbol caido": { "fas fa-tree fa-7x": true },
      Otro: { "fas fa-exclamation-triangle fa-7x": true }
    }
  },
  methods: {
    loadReports() {
      let reports = localStorage.getItem("reports");
      if (!reports) this.reports = [];
      else this.reports = JSON.parse(reports);
      this.reports.forEach((r) => {
        r.icon = this.iconClasses[r.problem];
        console.log(r);
      });
    }
  },
  beforeMount() {
    this.loadReports();
    // console.log(this.reports);
  }
});

function saveReport() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const problem = document.getElementById("problem").value;
  const street1 = document.getElementById("street1").value;
  const street2 = document.getElementById("street2").value;
  const description = document.getElementById("description").value;

  if (name && email && phone && problem && street1 && street2 && description) {
    let reports = localStorage.getItem("reports");
    if (!reports) reports = [];
    else reports = JSON.parse(reports);

    reports.push({
      name,
      email,
      phone,
      problem,
      street1,
      street2,
      description
    });
    localStorage.setItem("reports", JSON.stringify(reports));
    alert("reporte guardado correctamente");
  } else {
    alert("Llene todos los campos requeridos");
  }
}
