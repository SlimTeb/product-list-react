import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {connect} from "react-redux";
import {hideDialog} from "../../../actions/DialogActions/DialogActions";

export const DIALOG_ID = 'productDetailDialog'

class ProductDetailDialog extends Component {

    onHide() {
        const {dispatch} = this.props
        dispatch(hideDialog(DIALOG_ID))
    }

    render() {
        console.log("props", this.props)
        const {data, open} = this.props

        return(
            <div>
                <Dialog
                    open={open}
                    /*onClose={handleClose}*/
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{`Details about ${data && data.product && data.product.name}`}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={this.onHide.bind(this)} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("state", state)
    return state.dialog[DIALOG_ID] || {}
}


export default connect(mapStateToProps, null)(ProductDetailDialog)