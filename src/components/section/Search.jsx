import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { togglemenuState } from '../../App';

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();
    const [, setToggleMenu] = useRecoilState(togglemenuState);

    const handleSearch = () => {
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }

    const handleClick = () => {
        setToggleMenu(prevState => !prevState);
    }

    return (
        <div id='search'>
            <div id="menuToggle" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="search__inner">
                <label htmlFor="searchInput">검색</label>
                <input
                    type="search"
                    id='searchInput'
                    placeholder='검색어를 입력해주세요!'
                    autoComplete='off'
                    value={searchKeyword}
                    className='search__input'
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Search