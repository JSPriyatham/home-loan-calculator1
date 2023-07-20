import { Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap"

export const Home = () => {
    return (
        <div className='mx-1'>
            <Row className="mt-2">
                <Col
                    className="bg-light border"
                    xs="6"
                >
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="with a placeholder"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="password placeholder"
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleAddress">
                                Address
                            </Label>
                            <Input
                                id="exampleAddress"
                                name="address"
                                placeholder="1234 Main St"
                            />
                        </FormGroup>
                    </Form>
                </Col>
                <Col
                    className="bg-light border"
                    xs="6"
                >
                    <h4>B</h4>
                </Col>
            </Row>
            <Row className="mt-2"> 
                <Col
                    className="bg-light border"
                    xs="12"
                >
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    Class
                                </th>
                                <th>
                                    Heading
                                </th>
                                <th>
                                    Heading
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-primary">
                                <td>
                                    primary
                                </td>
                                <td>
                                    Cell
                                </td>
                                <td>
                                    Cell
                                </td>
                            </tr>
                            <tr className="table-secondary">
                                <td>
                                    secondary
                                </td>
                                <td>
                                    Cell
                                </td>
                                <td>
                                    Cell
                                </td>
                            </tr>
                            <tr className="table-success">
                                <td>
                                    success
                                </td>
                                <td>
                                    Cell
                                </td>
                                <td>
                                    Cell
                                </td>
                            </tr>
                            <tr className="table-danger">
                                <td>
                                    danger
                                </td>
                                <td>
                                    Cell
                                </td>
                                <td>
                                    Cell
                                </td>
                            </tr>
                            <tr className="table-warning">
                                <td>
                                    warning
                                </td>
                                <td>
                                    Cell
                                </td>
                                <td>
                                    Cell
                                </td>
                            </tr>
                            <tr className="table-info">
                                <td>
                                    info
                                </td>
                                <td>
                                    Cell
                                </td>
                                <td>
                                    Cell
                                </td>
                            </tr>
                            <tr className="table-light">
                                <td>
                                    light
                                </td>
                                <td>
                                    Cell
                                </td>
                                <td>
                                    Cell
                                </td>
                            </tr>
                            <tr className="table-dark">
                                <td>
                                    dark
                                </td>
                                <td>
                                    Cell
                                </td>
                                <td>
                                    Cell
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}