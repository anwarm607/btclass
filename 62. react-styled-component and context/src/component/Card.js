import {
    CardBodyWrapper,
    CardButton,
    CardDesc,
    CardHeading,
    CardImage,
    CardWrapper,
  } from "../style/Card";


const Card = () => {
  return (
    <CardWrapper>
      <CardImage src="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80" />
      <CardBodyWrapper>
        <CardHeading>Heading</CardHeading>
        <CardDesc>This is the short description about the card</CardDesc>
      </CardBodyWrapper>
      <CardButton>Action</CardButton>
    </CardWrapper>
  );
};

export default Card