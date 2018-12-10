import React, { Component } from 'react'
import {Button} from 'primereact/button'
import {InputText} from 'primereact/inputtext'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column';
import { Dropdown } from 'primereact/dropdown'
import { ToggleButton } from 'primereact/togglebutton'
import {Dialog} from 'primereact/dialog'

export default class AdminDisplay extends Component {

  constructor() {
      super();
      this.state = {displayDialog:false, selectedEmployee:{}};
  }

  componentDidMount() {
      this.props.getEmployees()
      this.props.getAccountLevels()
      this.props.getAccounts()
  }

  save =()=> {
    
  }

  delete = () =>{
      this.setState({
          selectedEmployee: null,
          displayDialog: false});
  }

  findSelectedCarIndex = () =>{
  }

  updateProperty=(property, value)=> {
  }

  onSelect=(e)=>{
      this.newEmployee = false;
      this.setState({
          displayDialog:true,
          selectedEmployee: Object.assign({}, e.data)
      });
  }

  addNew=()=> {
      this.newCar = true;
      this.setState({
          displayDialog: true
      });
  }

  render() {
      let header = <div className="p-clearfix" style={{lineHeight:'1.87em'}}>Employees </div>;

      let footer = <div className="p-clearfix" style={{width:'100%'}}>
          <Button style={{float:'left'}} label="Add" icon="pi pi-plus" onClick={this.addNew}/>
      </div>;

      let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
      <ToggleButton
      onLabel='Locked'
      offLabel='Unlocked'
      onIcon='pi pi-lock'
      tooltip={
        this.selectedEmployee.locked
          ? 'Click to unlock account'
          : 'Click to lock account'
      }
      tooltipOptions={{ position: 'bottom' }}
      offIcon='pi pi-unlock'
      checked={this.selectedEmployee.locked}
      onChange={e => this.setState({ locked: e.value })}
    />

              <Button label="Delete" icon="pi pi-times" onClick={this.delete}/>
              <Button label="Save" icon="pi pi-check" onClick={this.save}/>
          </div>;

      return (
          <div>

              <div className="content-section introduction">
                  <div className="feature-intro">
                      <h1>Admin</h1>
                      
                  </div>
              </div>

              <div className="content-section implementation">
                  <DataTable value={this.props.employees} paginator={true} rows={15}  header={header} footer={footer}
                             selectionMode="single" selection={this.state.selectedEmployee} onSelectionChange={e => this.setState({selectedEmployee: e.value})}
                             onRowSelect={this.onSelect}>
                      <Column field="locked" header="Locked" sortable={true} />
                      <Column field="full_name" header="Name" sortable={true} />
                      <Column field="email" header="Email" sortable={true} />
                      <Column field="department" header="Department" sortable={true} />
                      <Column field="manager" header="Manager" sortable={true} />
                      <Column field="account_level" header="Access Group" sortable={true} />                      

                  </DataTable>

                  <Dialog visible={this.state.displayDialog} width="300px" header="Employee Details" modal={true} footer={dialogFooter} onHide={() => this.setState({displayDialog: false})}>
                      {
                          this.state.selectedEmployee && 
                          
                          <div className="p-grid p-fluid">
                              <div className="p-col-8" style={{padding:'.5em'}}>
                              <Dropdown
                              optionLabel='name'
                              sel={this.state.selectedEmployee.account_level}
                              options={this.props.account_levels}
                              onChange={e => {
                                this.props.updateEmployees({account_level:e.level})
                              }}
                              placeholder='Select Access Level'
                              style={{ width: 'fit-content' }}
                            />
                              </div>
                             
                             
                         
                          </div>
                      }
                  </Dialog>
              </div>


          </div>
      );
  }
}