
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CheckboxGroup from './Checkboxes/CheckboxGroup';
import TimePickers from './Picker/TimePicker';
import SingleCheckbox from './Checkboxes/SingleCheckbox';
import ContainedButtons from './Buttons/ContainedButtons';
import FileSaver from 'file-saver';
class Settings extends Component {
    state = {
        browserSetting: {
            Chrome: false,
            Firefox: false,
            Explorer: true,
            Safari: false,
            Opera: false
        },
        targetwebsiteSetting: {
            waitfirst: 40,
            waitsecond: 55,
            isVisitPageWithinSite: false,
            pages: 1,
            visitfirst: 30,
            visitsecond: 50,
            afterfirst: 5,
            aftersecond: 10,
            targetsite: 10,
            minuteswaite: 20,
            autoreset: 1
        },
        deviceSetting: {
            "Device Reset": false,
            "Vinn Reset": false,
            "Phone Reset": true,
            "Mobile Reset": true,
            "Fly Mode": false
        },
        otherSetting: {
            "Remote Cookies": false,
            "Change Resolution": false,
            "Mouse Tracks": false,
            "Data Saving Mode": false,
            "Random Generate": false,
            "Analytics Protection": true,
            "Remove History": false
        }
    };

    newNumberUpdate = (e) => {
        const value = e.target.value;
        const property = e.target.id;
        this.setState(prevState => ({
            targetwebsiteSetting: {
                ...prevState.targetwebsiteSetting,
                [property]: value
            }
        }));
    }

    newCheckboxUpdate = (e) => {
        const checked = e.target.checked;
        const property = e.target.id;

        this.setState(prevState => ({
            targetwebsiteSetting: {
                ...prevState.targetwebsiteSetting,
                [property]: checked
            }
        }));

    }

    newCheckboxGroupUpdate = (groupname, name) => event => {
        const value = event.target.checked;
        this.setState(prevState => ({
            [groupname]: {
                ...prevState[groupname],
                [name]: value
            }
        })
        );

    };

    onStart = () => { }
    onStop = () => { }
    onExport = () => {
        const json = JSON.stringify(this.state);
        var blob = new Blob([json], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, "GoogleAdwardSetup.json");
    }


    render() {
        
        return (
            <Grid item xs={4} >
                <Grid container direction='column' >
                    <Grid item >
                        <Box component="span" className="title">Settings</Box>
                    </Grid>
                    <Grid item >
                        < CheckboxGroup
                            CheckboxGroupDetail={this.state.browserSetting}
                            newCheckboxGroupUpdate={this.newCheckboxGroupUpdate}
                            CheckboxGroupName={Object.keys(this.state)[0]}
                        />
                    </Grid>
                    <Grid item >
                        Wait
                    <TimePickers
                            defaultValue={this.state.targetwebsiteSetting.waitfirst}
                            newNumberUpdate={this.newNumberUpdate}
                            id={Object.keys(this.state.targetwebsiteSetting)[0]}
                        />
                        <TimePickers
                            defaultValue={this.state.targetwebsiteSetting.waitsecond}
                            newNumberUpdate={this.newNumberUpdate}
                            id={Object.keys(this.state.targetwebsiteSetting)[1]}
                        />

                        seconds on the targeted website.<br />

                        <SingleCheckbox
                            checked={this.state.targetwebsiteSetting.isVisitPageWithinSite}
                            id={Object.keys(this.state.targetwebsiteSetting)[2]}
                            newCheckboxUpdate={this.newCheckboxUpdate}


                        /> Visit the page within the site<br />

                        <TimePickers
                            defaultValue={this.state.targetwebsiteSetting.pages}
                            newNumberUpdate={this.newNumberUpdate}
                            id={Object.keys(this.state.targetwebsiteSetting)[3]}
                        /> pages
                          <TimePickers
                            defaultValue={this.state.targetwebsiteSetting.visitfirst}
                            newNumberUpdate={this.newNumberUpdate}
                            id={Object.keys(this.state.targetwebsiteSetting)[4]}
                        />
                        <TimePickers
                            defaultValue={this.state.targetwebsiteSetting.visitsecond}
                            newNumberUpdate={this.newNumberUpdate}
                            id={Object.keys(this.state.targetwebsiteSetting)[5]}
                        /> visit from to second. <br />

                        After the operation is complete
                        <TimePickers
                            defaultValue={this.state.targetwebsiteSetting.afterfirst}
                            newNumberUpdate={this.newNumberUpdate}
                            id={Object.keys(this.state.targetwebsiteSetting)[6]}
                        />
                        <TimePickers
                            defaultValue={this.state.targetwebsiteSetting.aftersecond}
                            newNumberUpdate={this.newNumberUpdate}
                            id={Object.keys(this.state.targetwebsiteSetting)[7]}
                        />
                        seconds wait. <br />
                        Target site
                        <TimePickers
                            defaultValue={this.state.targetwebsiteSetting.targetsite}
                            newNumberUpdate={this.newNumberUpdate}
                            id={Object.keys(this.state.targetwebsiteSetting)[8]}
                        />
                        if not found times
                        <TimePickers
                            defaultValue={this.state.targetwebsiteSetting.minuteswaite}
                            newNumberUpdate={this.newNumberUpdate}
                            id={Object.keys(this.state.targetwebsiteSetting)[9]}
                        />
                        minutes wait <br />
                        <TimePickers
                            defaultValue={this.state.targetwebsiteSetting.autoreset}
                            newNumberUpdate={this.newNumberUpdate}
                            id={Object.keys(this.state.targetwebsiteSetting)[10]}
                        />
                        automatic reset after operation <br />

                    </Grid>


                    <Grid item >
                        < CheckboxGroup
                            CheckboxGroupDetail={this.state.deviceSetting}
                            newCheckboxGroupUpdate={this.newCheckboxGroupUpdate}
                            CheckboxGroupName={Object.keys(this.state)[2]}
                        />
                    </Grid>
                    <Grid item >
                        < CheckboxGroup
                            CheckboxGroupDetail={this.state.otherSetting}
                            newCheckboxGroupUpdate={this.newCheckboxGroupUpdate}
                            CheckboxGroupName={Object.keys(this.state)[3]}
                        />
                    </Grid>
                    <Grid item >
                        <ContainedButtons
                            onStart={this.onStart}
                            onStop={this.onStop}
                            onExport={this.onExport}
                        />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

Settings.propTypes = {

};

export default Settings;
