import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="20" lg="65">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> File View
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Cycle Date</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Run Date</th>
                    <th>Records</th>
                    <th>Success Records</th>
                    <th>Failure Records</th>
                    <th>Status</th>
                    <th>Message</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>09/17/18</td>
                    <td>Bus Statement</td>
                    <td>O6202CCSTMNT.txt</td>
                    <td>09/17/18</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>
                      <Badge color="danger">Failed</Badge>
                    </td>
                    <td>File Not Arrived From Tsys</td>
                  </tr>
                  <tr>
                    <td >09/16/18</td>
                    <td>Bus Statement</td>
                    <td>O6202CCSTMNT.txt</td>
                    <td>09/16/18</td>
                    <td>23</td>
                    <td>23</td>
                    <td>0</td>
                    <td>
                      <Badge color="success">Success</Badge>
                    </td>
                    <td>N/A</td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Tables;
