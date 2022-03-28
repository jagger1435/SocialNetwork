import React from 'react';

const RMenu = () => {
    return (

        <div className="narrow_column_wrap">
            <div className="page_block ui_rmenu ui_rmenu_pr _ui_rmenu_auto_expand" id="feed_rmenu"
                 role="list">
                <div id="ui_rmenu_news_list" data-sublist-id="news"
                     className="_ui_rmenu_sublist _ui_rmenu_news_list ">
                    <a id="ui_rmenu_photos" href=""
                       className="ui_rmenu_subitem  _ui_item_photos feed_section_photos ">
                        <span>подмею1</span>
                    </a>
                    <a id="ui_rmenu_friends" href=""
                       className="ui_rmenu_subitem  _ui_item_friends feed_section_friends ">
                        <span>подменю2</span>
                    </a><a id="ui_rmenu_groups" href=""
                           className="ui_rmenu_subitem  _ui_item_groups feed_section_groups ">
                    <span>подменю3</span>
                </a>
                </div>
                <div className="ui_rmenu_sep"></div>
            </div>
        </div>
    );
}
export default RMenu;