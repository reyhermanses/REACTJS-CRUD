import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';

function Unit() {

    const [unit, setUnit] = useState({});

    useEffect(() => {
        fetchUnit()
    }, [])

    const fetchUnit = async () => {
        await axios.get('http://localhost:8000/api/unit-kerja/', {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('api_token'),
                Accept: 'application/json',
            }
        }).then(({ data }) => {
            setUnit(data.data);
            // console.log(data);
        }).catch((error) => {
            console.log('error ' + error);
        });
    }

    function formatDate() {
        const date = new Date().toDateString().split(" ");
        return date[2] + "-" + date[1] + "-" + date[3]
    }

    return (
        <div className="container">
            <div className="row">
                <div className='col-12'>
                    <Link className='btn btn-primary mb-2 float-end' to={"/product/create"}>
                        Create Product
                    </Link>
                </div>
                <div className="col-12">
                    <div className="card card-body">
                        <div className="table-responsive">
                            <table className="table table- bordered mb-0 text-center">
                                <thead>
                                    <tr>
                                        <th>Nama</th>
                                        <th>Created At</th>
                                        <th>Created By</th>
                                        <th>Updated At</th>
                                        <th>Updated By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        unit.length > 0 && (
                                            unit.map((row, key) => (
                                                <tr key={key}>
                                                    <td>{row.name}</td>
                                                    <td>{formatDate(row.created_at)}</td>
                                                    <td>{row.created_by.name}</td>
                                                    <td>{formatDate(row.updated_at)}</td>
                                                    <td>{row.updated_by.name}</td>
                                                    {/* <td>{row.description}</td>
                                                    <td>
                                                        <img width="50px" src={`http://localhost:8000/storage/product/image/${row.image}`} />
                                                    </td>
                                                    <td>
                                                        <Link to={`/product/edit/${row.id}`} className='btn btn-success me-2'>
                                                            Edit
                                                        </Link>
                                                        <Button variant="danger" onClick={() => deleteProduct(row.id)}>
                                                            Delete
                                                        </Button>
                                                    </td> */}
                                                </tr>
                                            ))
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Unit;