import React, { Component } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { removeSelectedMovie } from '../Redux/action'

class MovieDetails extends Component {
    render() {
        const { loading, movieDetails = {} } = this.props
        const { Awards, TitleName, OtherNames, ReleaseYear, StoryLines, TitleParticipants } = movieDetails
        if (loading) <Spinner animation="border" variant="primary" />
        return <div>
            <div style={{ padding: 20, position: 'fixed', width: '100%', background: '#f6f6f6' }}>
                <button style={{ marginBottom: 10 }} onClick={this.props.removeSelectedMovie}>Go back</button>
                <h2>{`${TitleName} - ${ReleaseYear}`}</h2>
            </div>
            <div style={{ padding: 20, paddingTop: 150 }}>
                <div>
                    <label>Story Lines</label>
                    {StoryLines && <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Language</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {StoryLines.map(s => <tr>
                                <td>{s.Type}</td>
                                <td>{s.Language}</td>
                                <td>{s.Description}</td>
                            </tr>)}
                        </tbody>
                    </Table>}
                </div>
                <div style={{ marginTop: 20 }}>
                    <label>Awards</label>
                    {Awards && <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Award Year</th>
                                <th>Award Category</th>
                                <th>Award Institution</th>
                                <th>Award Won</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Awards.map(s => <tr>
                                <td>{s.AwardYear}</td>
                                <td>{s.Award1}</td>
                                <td>{s.AwardCompany}</td>
                                <td>{s.AwardWon ? 'Yes' : 'No'}</td>
                            </tr>)}
                        </tbody>
                    </Table>}
                </div>
                <div style={{ marginTop: 20 }}>
                    <label>Movie Crew</label>
                    {TitleParticipants && <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Role</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TitleParticipants.map(s => <tr>
                                <td>{s.RoleType}</td>
                                <td>{s.Participant.Name}</td>
                            </tr>)}
                        </tbody>
                    </Table>}
                </div>
                <div style={{ marginTop: 20 }}>
                    <label>Other Names</label>
                    {OtherNames && <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Title Name Language</th>
                                <th>Title Name Type</th>
                                <th>Title Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {OtherNames.map(s => <tr>
                                <td>{s.TitleNameLanguage}</td>
                                <td>{s.TitleNameType}</td>
                                <td>{s.TitleName}</td>
                            </tr>)}
                        </tbody>
                    </Table>}
                </div>
            </div>
        </div>
    }
}

export default connect(null, { removeSelectedMovie })(MovieDetails)