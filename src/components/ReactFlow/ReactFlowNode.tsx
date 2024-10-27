import React from "react";
import { Handle, Position } from "reactflow";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ReactDOM from "react-dom";

interface Subject {
  id: string;
  name: string;
  prerequisites: string[];
  corequisites: string[];
  credits: number;
  level: number;
  area: string;
  state: boolean;
}

interface SubjectProps {
  subject: Subject;
  noHandles: boolean;
}

const RFNode: React.FC<SubjectProps> = ({ subject }, noHandles: boolean) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="rf-node">
      {/* Conditionally render handles if noHandles is false or undefined */}
      {!noHandles && (
        <>
          <Handle
            type="target"
            position={Position.Left}
            style={{ background: "#555" }}
            isConnectable={true}
          />
        </>
      )}

      {/* Node content */}
      <div onClick={toggleDrawer}>
        <h1>{subject.name}</h1>
        {subject.credits > 0 && <div>creditos: {subject.credits}</div>}
      </div>

      {!noHandles && (
        <>
          <Handle
            type="source"
            position={Position.Right}
            style={{ background: "#555" }}
            isConnectable={true}
          />
        </>
      )}

      {ReactDOM.createPortal(
        isOpen && <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div>{subject.name}</div>
        </Drawer>,
        document.body
      )}
    </div>
  );
};

export default RFNode;