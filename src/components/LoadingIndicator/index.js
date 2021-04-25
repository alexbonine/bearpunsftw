import React from "react";
import { Container, Spinner } from "./styles";

const LoadingIndicator = () => {
  return (
    <Container>
      <Spinner>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spinner>
    </Container>
  );
};

export default LoadingIndicator;
