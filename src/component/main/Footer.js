import React from 'react'
import "./../../assets/style/footer.scss"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer_row_1 footer_about">About Us</div>
                <div className="footer_row_2">
                    <div className="footer_column">
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>
                    </div>
                    <div className="footer_column">
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item" style={{"margin-bottom": "20px"}}>lorem</div>
                        <div className="footer_column_item">lorem lorem lorem</div>
                        <div className="footer_column_item">lorem lorem lorem</div>
                        <div className="footer_column_item">lorem lorem lorem</div>
                        <div className="footer_column_item">lorem lorem lorem</div>

                    </div>
                    <div className="footer_column">
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>
                        <div className="footer_column_item">lorem</div>

                    </div>
                    <div className="footer_column">
                    </div>
                </div>
                <div className="footer_row_3">
                    <div className="footer_icon">
                        <TwitterIcon />
                    </div>
                    <div className="footer_icon">
                        <InstagramIcon />
                    </div>
                    <div className="footer_icon">
                        <MailOutlineOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
