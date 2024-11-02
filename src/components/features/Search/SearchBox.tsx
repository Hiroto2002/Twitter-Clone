import React from 'react'


// アイコンインポート
import Search from '@mui/icons-material/Search';


export const SearchBox = () => {
    return (
    <div className='SearchHeader' style={styles.SearchHeader}>
        <div className='SearchTextFild' style={styles.SearchTextFild}>
            <Search/>
            <input className='SearchBox' style={styles.textField} type='text' placeholder='検索' />
        </div>
        
    </div>
    );
};


//スタイル
const styles: { [key: string]: React.CSSProperties } = {
    SearchHeader:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em",
        borderBottom: "1px solid #e0e0e0",
    },
    SearchTextFild:{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "9999px",
        padding: "0.5em",
    },
    textField:{
        border: "none",
        outline: "none",
        backgroundColor: "#f9f9f9",
    },
    
}
