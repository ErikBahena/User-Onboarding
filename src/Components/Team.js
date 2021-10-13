import React from "react";
import styled from "styled-components";

const StyledTeamContainer = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    text-align: center;
    margin-top: 2%;
    font-size: 1.5rem;
  }

  .team-members-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
      height: 4rem;
      width: 4rem;
      background-color: blue;
      margin: 1rem;
    }
  }
`;

export default function Team() {
  return (
    <StyledTeamContainer>
      <h3>Team Members</h3>
      <div className="team-members-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledTeamContainer>
  );
}
