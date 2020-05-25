import React, { Fragment } from "react"
import loading from "./loading.gif"

const styling = { "height": "100%", "width": "100%" }

const Loading = () => (<Fragment><img src={loading} alt="Loading...." style={styling} /><h1 style={{ "color": "gray" }}>Loading...</h1></Fragment>)

export default Loading