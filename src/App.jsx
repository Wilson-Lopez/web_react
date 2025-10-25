function App() {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="mb-4 text-primary">Tecsupino App</h1>
          <h3 className="mb-5">¡Hello, Lopez! </h3>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://www1.tecsup.edu.pe/sites/default/files/branches/image_mini/lima_0.png"
                  className="card-img-top"
                  alt="Tecsup"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Tecsup</h5>
                  <p className="card-text flex-grow-1">
                    Tecsup es una organización educativa privada sin fines de lucro,
                    dedicada a formar y capacitar profesionales.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Actualizado hace 3 min
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://cursostotales.com.pe/wp-content/uploads/2022/01/IDAT.jpg"
                  className="card-img-top"
                  alt="IDAT"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">IDAT</h5>
                  <p className="card-text flex-grow-1">
                    Carreras con futuro laboral. Encuentra las carreras técnicas,
                    certificaciones y diplomas con alta demanda en el mercado.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Actualizado hace 3 min
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://www.businessempresarial.com.pe/wp-content/uploads/2021/07/senati_es_el_instituto_mas_recordado_de_lima_2.jpg"
                  className="card-img-top"
                  alt="SENATI"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">SENATI</h5>
                  <p className="card-text flex-grow-1">
                    El Servicio Nacional de Adiestramiento en Trabajo Industrial lleva
                    más de 60 años brindando educación técnica de calidad.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Actualizado hace 3 min
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;