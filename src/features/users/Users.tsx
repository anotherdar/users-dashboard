import * as React from 'react';
import { useSelector } from 'react-redux';
import { Input, Title, Table } from '../../components';

import "./styles/users.scss"
import { userSelector } from './userSlice';

import nodata from "../../assets/no-data.svg"

export const Users: React.FC = () => {
    const users = useSelector(userSelector)

    return (
        <div className="users">
            <div className="users-header">
                <Title icon="people" title="users" />
                <label className="search pointer">
                    <i className="material-icons">
                        search
                    </i>
                    <Input type="text" name="search" placeholder="Search" />
                </label>
            </div>
            <hr />
            <div className="users-content">
                {users.length === 0 ? <img src={nodata} alt="no supported" className="screen--img" /> :
                    <>
                        <Table
                            type="header"
                            titles={[
                                "id",
                                "Name",
                                "Email",
                                "Gender"
                            ]}
                        />
                        {
                            users.map(u => {
                                const { identificationNumber, firstName, lastName, email, gender } = u
                                return <Table
                                    type="item"
                                    titles={[
                                        String(identificationNumber),
                                        `${firstName} ${lastName}`,
                                        email,
                                        gender
                                    ]}
                                />
                            })
                        }
                    </>
                }
            </div>
        </div>
    )
}