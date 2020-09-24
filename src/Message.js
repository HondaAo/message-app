import React, {forwardRef} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


 const Message = forwardRef(({message, username, sender},ref)=>{
 const isUser = username === sender;
 
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                    color="primary"
                    variant="h5"
                    component="h2"
                    >
                    {isUser ? '' : `${sender}:`}{message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})
export default Message