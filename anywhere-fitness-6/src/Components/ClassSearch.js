import React from "react";
import  { Classlist } from "../components/Class-list"
import { connect } from "react-redux";
import { searchClassList } from "../redux/actions/classActions";

const ClassSearch = (props) => {
    const { search, value } = props;


const onChange = (e) => {
    searchClassList(e.target.value)
}
return (
    <>
        <label htmlFor="search">Search by class Name</label>
        <input type="text" value={value} onChange={onChange}/>
        <Classlist />
    </>
)

}
const mapStateToProps = (state) => {
  return {
    search: state.search,
    value: state.value
  };
};

export default connect(mapStateToProps, { searchClassList })(ClassSearch);