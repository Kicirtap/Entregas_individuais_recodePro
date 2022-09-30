import { Component } from "react";


class PromotionsList extends Component {
  render() {
    return (

      <div className=" py-2 bg-light">
        <div className="container alinhar">

          <div className="row row-cols-1 row-cols-sm-6 row-cols-md-6 g-5">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm card_scale">
                <span className="item_discount"> -50% </span>
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={require('../assets/capa.webp')} aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                <div className="card-body">
                  <h5 className="card-title">Local - 1</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quae consequuntur provident id nam magni. Debitis delectus quos unde reprehenderit, ab accusamus vel? Molestiae sapiente explicabo at dolores. Nihil, doloremque.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a role="button" className="btn btn-sm btn_novidades" href="#">Comprar</a>
                    </div>
                    <small className="text-success fw-bold">R$ 9.500,00</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm card_scale">
                <span className="item_discount"> -50% </span>
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={require('../assets/capa.webp')} aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                <div className="card-body">
                  <h5 className="card-title">Local - 1</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quae consequuntur provident id nam magni. Debitis delectus quos unde reprehenderit, ab accusamus vel? Molestiae sapiente explicabo at dolores. Nihil, doloremque.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a role="button" className="btn btn-sm btn_novidades" href="#">Comprar</a>
                    </div>
                    <small className="text-success fw-bold">R$ 9.500,00</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm card_scale">
                <span className="item_discount"> -50% </span>
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={require('../assets/capa.webp')} aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                <div className="card-body">
                  <h5 className="card-title">Local - 1</h5>
                  <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quae consequuntur provident id nam magni. Debitis delectus quos unde reprehenderit, ab accusamus vel? Molestiae sapiente explicabo at dolores. Nihil, doloremque.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a role="button" className="btn btn-sm btn_novidades" href="#">Comprar</a>
                    </div>
                    <small className="text-success fw-bold">R$ 9.500,00</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default PromotionsList