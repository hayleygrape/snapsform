import React from "react";
import Snap from "./Snap";
import "./style.css";

export default function SnapList(props) {
    return (
        <div className="commentList">
            <h5 className="text-muted mb-4">
            <span className="badge badge-success">{props.comments.length}</span>{" "}
            Comment{props.comments.length > 0 ? "s" : ""}
            </h5>

        {props.comments.length === 0 && !props.loading ? (
            <div className="no-comments">
                Be the first to comment
            </div>
        ) : null}

        {props.comments.map((comment, index) => (
            <Snap key={index} comment={comment} />
        ))}

        </div>
    );
}