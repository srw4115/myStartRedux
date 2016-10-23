import { connect } from "react-redux"
import MainContent from "./content.js"

const mapStateToProps = (state) => ({
    text: state
});

const content = connect(mapStateToProps)(MainContent);

export default content
