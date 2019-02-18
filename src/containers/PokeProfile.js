import React from 'react'
import './PokeProfile.css'
import Tags from '../components/Tags'
import Moves from '../components/Moves'

const PokeProfile = (props) => {
    const { move, name, number, picture, sprites, stats, types, index } = props.pokemon;
    return (
        <>
            <nav aria-label="col-12 breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item point" onClick={props.home}><span>Home</span></li>
                    <li className="breadcrumb-item active" aria-current="page">{name}</li>
                </ol>
            </nav>
            <div className='col-12 row'>
                <h2 className='ml-auto'># {number} {name}</h2>
            </div>
            <div className='col-12 p-4 row'>
                <div className='col-4 row'>
                    <img className='col-12' src={picture} />
                    {types.map((e, i) => {
                        return (
                            <div className='col-6 row bothTag' key={i}>
                                <Tags name={e} type={e.toLowerCase()} />
                            </div>
                        )
                    })}
                </div>
                <div className='offset-1 col-7 row'>
                    <div className='col-12 row d-flex justify-content-between'>
                        {
                            sprites.map((e, i) => {
                                return (
                                    <div className='col-3' key={i}>
                                        <img src={e.sprite} />
                                    </div>
                                )
                            })
                        }
                        <div className='col-12 text-center'>
                            <h3 className='text-muted'>Default</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 row'>
                <div className='col-12 text-left'>
                    <h3 className=''>Base Stats</h3>
                </div>
                <div className='nes-container is-rounded row d-flex justify-content-between'>
                        {
                            stats.map( (e, i) => {
                                return (
                                    <div className='col-2 text-center row' key={i}>
                                        <span className='h6 col-12 text-muted'>{e.name}</span>
                                        <span className='h6 col-12'>{e.base_stat}</span>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
            
            <div className='col-12 row'>
                <div className='col-12 text-left'>
                    <h3 className=''>Moves</h3>
                </div>
                <div className='row d-flex justify-content-between'>
                    <Moves move1={'FirstAttack'} move2={'SecondAttack'} move3={'ThirdAttack'} />
                </div>
            </div>

        </>
    )
};

export default PokeProfile;