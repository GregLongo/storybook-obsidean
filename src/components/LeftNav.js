import React, { Component } from 'react';
import classNames  from 'classnames';

class NavSubSubSection extends React.Component {
  render() {
    const activeClass =
      this.props.active && !this.props.children && "leftnav-selected";

    const classes = classNames("leftnav-row  leftnav-subsubcat", activeClass);
    return (
      <div onClick={this.props.onClick} id={this.props.id} className={classes}>
        <span className="textlink">Sub Sub Menu Item </span>
      </div>
    );
  }
}

class NavSubSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleChildClick(evt) {
    evt.stopPropagation();
  }

  render() {
    const activeClass =
      this.props.active && !this.props.children && "leftnav-selected";

    const openClass = this.state.open ? "open" : "closed";

    const classes = classNames(
      "leftnav-row  leftnav-subcat",
      activeClass,
      openClass
    );

    return (
      <div
        onClick={
          this.props.children
            ? () => {
                this.toggle();
              }
            : this.props.onClick
        }
        id={this.props.id}
        className={classes}
      >
        {this.props.children && <span className="caret"> </span>}
        <span className="textlink">Sub Menu Item </span>
        <div onClick={this.handleChildClick} className="leftnav-sub-drawer">
          {this.props.children}
        </div>
      </div>
    );
  }
}

class NavSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleChildClick(evt) {
    evt.stopPropagation();
  }

  render() {
    const activeClass =
      this.props.active && !this.props.children && "leftnav-selected";

    const openClass = this.props.open ? "open" : "closed";

    const classes = classNames(
      "section-drawer leftnav-row menu-item",
      this.props.icon,
      openClass,
      activeClass
    );

    return (
      <div
        onClick={
         this.props.onClick
        }
        id={this.props.id}
        className={classes}
      >
        <span className="textlink "> {this.props.text} </span>
        <span class="badge badge-solid">{this.props.badge}</span>
        {this.props.children && (
          <div onClick={this.handleChildClick} className="leftnav-drawer">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

class LeftNav extends React.Component {
  static defaultProps = {
    icons: false,
    minimized: false
  };

  state = {};

  selectActive(e) {
    const id = e.target.id;
    console.log(id);
    this.setState({
      activeID: id
    });
  }

  selectOpen(e) {
    const id = this.state.openID == e.target.id ?  null : e.target.id;
    console.log(id);
    this.setState({
      openID: id
    });
  }

  render() {
    const { icons, minimized, className } = this.props;

    const classes = classNames("leftnav-container", {
      "leftnav-icons": icons,
      "leftnav-minimized": minimized && !icons,
      "leftnav-icons-minimized": icons && minimized
    });

    return (

      <div className={classes}>
        <div className="leftnav">
          <NavSection
            icon="item-one"
            badge="9"
            text="Menu Item"
            id="1"
            onClick={e => this.selectActive(e)}
            active={this.state.activeID === "1"}
          />
          <NavSection 
            icon="item-two"
            badge="23"
            text="Menu Item"
            id="2"
            onClick={e => this.selectOpen(e)}
            open={this.state.openID === "2"}
            >
            <NavSubSection id="7">
              <NavSubSubSection
                id="15"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "15"}
              />
              <NavSubSubSection
                id="16"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "16"}
              />
            </NavSubSection>
            <NavSubSection
              id="8"
              onClick={e => this.selectActive(e)}
              active={this.state.activeID === "8"}
            />
          </NavSection>
          <NavSection 
            icon="item-three"
            badge="12"
            text="Menu Item"
            id="3"            
            onClick={e => this.selectOpen(e)}
            open={this.state.openID === "3"}>
            <NavSubSection id="9">
              <NavSubSubSection
                id="17"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "17"}
              />
              <NavSubSubSection
                id="18"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "18"}
              />
            </NavSubSection>
            <NavSubSection
              id="10"
              onClick={e => this.selectActive(e)}
              active={this.state.activeID === "10"}
            />
          </NavSection>
          <NavSection
            icon="item-four"
            badge="4"
            text="Menu Item"
            id="4"
            onClick={e => this.selectActive(e)}
            active={this.state.activeID === "4"}
          />
          <NavSection
            icon="item-five"
            badge="32"
            text="Menu Item"
            id="5"
            onClick={e => this.selectOpen(e)}
            open={this.state.openID === "5"}
          >
            <NavSubSection id="11">
              <NavSubSubSection
                id="19"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "19"}
              />
              <NavSubSubSection
                id="20"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "20"}
              />
            </NavSubSection>
            <NavSubSection
              id="12"
              onClick={e => this.selectActive(e)}
              active={this.state.activeID === "12"}
            />
          </NavSection>
          <NavSection 
            icon="item-six"
            badge="1"
            text="Menu Item"
            id="6"
            onClick={e => this.selectOpen(e)}
            open={this.state.openID === "6"}
            >
            <NavSubSection id="13">
              <NavSubSubSection
                id="21"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "21"}
              />
              <NavSubSubSection
                id="22"
                onClick={e => this.selectActive(e)}
                active={this.state.activeID === "22"}
              />
            </NavSubSection>
            <NavSubSection
              id="14"
              onClick={e => this.selectActive(e)}
              active={this.state.activeID === "14"}
            />
          </NavSection>
          </div>
      </div>
    );
  }
}

export default LeftNav