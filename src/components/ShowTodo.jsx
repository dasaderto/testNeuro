import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Paper} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function ShowTodo(props) {
    const classes = useStyles();
    return (
        <Paper style={{margin: 16, padding: 16}}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {props.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {props.status}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.body}
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
    );
}