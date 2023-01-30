import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WeAre = () => {
  return (
    <>
      <section className="who_section" id="Bans">
        <div className="hr_background_color py-md-5">
          <hr className="hr_line"></hr>
        </div>
        <Container>
          <div className="text-center text-white my-5 py-lg-5">
            <Row className="justify-content-center ">
              <Col lg={10} xl={8} className="px-sm-5">
                <h2 className="ff_inter fw_medium fs_2xl">
                  <span className="gradient_text_color">WHO</span> WE ARE?
                </h2>
                <p className="ff_poppins fw_medium fs_lg">
                  Tincidunt laoreet integer ut aenean rhoncus. Pulvinar erat
                  vitae facilisis facilisi ut massa nec interdum laoreet. Morbi
                  tristique dictum facilisis pharetra egestas sit et. Velit nunc
                  sapien mauris integer. Ornare habitasse nunc porta tincidunt
                  pulvinar ut risus.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WeAre;
