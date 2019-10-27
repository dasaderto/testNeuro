import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Paper} from "@material-ui/core";

class Layout extends Component {
    render() {
        return (
            <div>
                <Paper
                    elevation={0}
                    style={{padding: 0, margin: 0, backgroundColor: "#fafafa"}}
                >
                    <AppBar color="primary" position="static" style={{height: 64}}>
                        <Toolbar style={{height: 64}}>
                            <Typography color="inherit">Neuro todo</Typography>
                        </Toolbar>
                    </AppBar>
                    {this.props.children}
                </Paper>
            </div>
        );
    }
}

export default Layout;