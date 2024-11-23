import React from "react";
import UserIcon from "../buttons/UserIcon";
import XButton from "../buttons/XButton";
import SendButton from "../buttons/SendButton";
import SaveButton from "../buttons/SaveButton";
import './Card.css';

// props: 
//      All: type, user, hasX, topText, mainText, hasLine, bottomText
//      Post-specific (complex): bookmarked, show, handleBookmark, handleShow (if hasX), isProfileList, isUserSavedList
//      Ex. Contact (simple): no additional props

const ACard = React.memo((props) => {
    return (
        ((props.type !== 'complex' || 
            ((!props.isUserSavedList && props.isProfileList) || 
            (props.isUserSavedList && props.bookmarked) || 
            (!props.isProfileList && props.show))) &&
         <div className='card'>{props.children}</div>
        )
    )
})
const CardBody = (props) => {
    return (
        <div className='colContainer'>{props.children}</div>
    )
}
const X = (props) => {
    return (
        <div>{props.hasX && <XButton handleShow={props.handleShow}/>}</div>
    )
}
const CardInfo = (props) => {
    return (
        <div className='cardTextBlock'>{props.children}</div>
    )
}
const Name = (props) => {
    return (
        <p>{props.topText}</p>
    )
}
const MainText = (props) => {
    return (
        <p className='mainText'>{props.mainText}</p>
    )
}
const Line = (props) => {
    return (
        <div>
            {props.hasLine && <div className='postLine'/>}
        </div>
    )
}
const BottomText = (props) => {
    return (
        <p style={{whiteSpace: 'pre'}}>
            {props.bottomText}
        </p>
    )
}
const SendSave = (props) => {
    return (
        <div>
            {props.type === 'complex' &&
            <div className='sendSaveContainer'>
                <SendButton/>
                <SaveButton bookmarked={props.bookmarked}
                            handleBookmark={props.handleBookmark}/>
            </div>}
        </div>
    )
}
const Card = React.memo((props) => {
    return (
        <ACard type={props.type} isProfileList={props.isProfileList} isUserSavedList={props.isUserSavedList} bookmarked={props.bookmarked} show={props.show}>
            <UserIcon user={props.user}/>
            <CardBody>
                <X hasX={props.hasX} handleShow={props.handleShow}/>
                <CardInfo>
                    <Name topText={props.topText}/>
                    <MainText mainText={props.mainText}/>
                    <Line hasLine={props.hasLine}/>
                    <BottomText bottomText={props.bottomText}/>
                </CardInfo>
                <SendSave type={props.type} bookmarked={props.bookmarked} handleBookmark={props.handleBookmark}/>            
            </CardBody>
        </ACard>
    )
})

export default Card;
