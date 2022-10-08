<template>
   
    <div id="nav-bar">
        <div id="nav-bar-logo">
            <a href="#/"><img id="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAAA7CAYAAACKVDMmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABU1SURBVHgB7V1dbBzXdT6zSymOKKoMUBewXFRroI1qF6jI2HT7UnCVOA9y5Uh0nQersEi3gA05di1VBuImQEkGyI8AC5GgFEbzUFEOYj+0iOgfxA9xq2XeGjkl5aJy7afVQ2IgfjBjiXIhiTs935l7Lu8O587c2aUjF50PWO5wd3bm/px7/s+diCpUyMHiB/Ew1WgqqtO+iGiEIhqmmJZjoqW4Q2dGt0Vz1AMiqlDBg8Ur8eEa0bQQmwdMQPOr1+jR0c9Ey1QCA1ShQgbeWolPM1ebwvHFn5+n1196gf7r5z+jq5cv05ahIRprfoEeeuwrdOttt++PNglh7i5z/YrjVVgHJToQ2Znj36aF1+Yzz7t1++309/84B+KjTkxHRrdGJygQFeFV6MJ/fhRPdzo0A6L7xuOT1H73v3PPv+vuMSa+Mzhc7lyjO0JF7oaJWlFCN1GDOvwiUUChlA5DP4gi+i0qCVZcL8lBh5b5Gni15f06tcvqExXCwHPYANHh+LlnniokOgBi+CKL4LvuvhfzP8UfBXG90oQnBDbA1k2HRqIB2iWWTszEpgponTYEUc0c1FJfbCa6cCVOrKqYFugGzTEhtqlC36htpnN4/5fv/4MQUyjebP0bCI9qMTUpkPCCRG2mSZ0CWPPKlct06Z23aUWOP5TP9POyuPW27fIORXZw6zbRJwb5eMdn/zDr9Jldg9EsVegZix/GU7U6nX7/l7+gp770xXXf37p9O+15+KAQJea0+7vb6dQrP8HhMs/DZ0Lul8vxFi/HTRaT0/xqup9fYhYMC+fSu+8Iof3qvV+sa8zHiQYTHzp7D1tW43v346MZ5oLDu7ZGR6hCT2Cim8Y7CCsNLH7ocTAiMM/pc0CsxtodBpMKUYUyOR5kPZvIp5XgcFHIe1g351tv/EaJrAggQgwKBof1k92jQ1GLKpRCEbe7/+FH6ODRv5Nj0MGzBx5cd86pV3+SWLc1NjA+Xaz6rON4rtMQBPZj9t/g9UkiNhcYCLQPPiVuM9hfiyqUQh63A/YcOGiPB7cOZZ4DogXhsc7d4H/bVIAuwlNTGseYzCx5/knE+yzqgV6s5//vYG6HxdoA4WT56+AoFoJi/Y3IH8EoC2szukQHp+ELx7/zf4LogIYxOKwLpkI46kl0wsft7ml+Xg9P0gZCOJ7rvwHRvf7SD+jjRmKtJmz7/fd+Sb0C1haMDIMWVQgG5p05zz4cwx+XhbHx++S9s0pLLJK9HgoYe4KBYjGbnMaof4pOs09MxGsI0YFowGUan72T3Rs7+f9t1NiZcB3DlmUF+VYR8Mxzp8T3kwUVnWD/wIq4ZT60BKrfw7XS3Dsh7WFf4kJlWJREPTEez7f+1Y6pC0QlZGzZZyrOeyKvFITLS/A/FBa5ANUz0TUxya+/mE90aAiUeBCcaZAXRV5vXAPge18yupnVH5R49b0QTHSdQTEsKpRAfYAmwXDeZMLLwpiRJCwNX2bCG8GxMgMX8K8aelgOD5kNrGUgZFE9gIumORQ3+EKciLY2RzHarC22eQUt1zq0yJ8NX3rHT3gQj9rQka1RI/394kdx8lliIZGE30jCb8n/kf28zX9bFacrD2U4OD6/kE14zny3+CULu/3u2+vOU6c+E+gFCsRAvU7joHpfBgLwxPS3tBGg5pOdLXRiNFpP2eyKkagGVoWPiAHlZL6GOn6gNlX4eGDELBhOlvh0okTLWNhvXY2nQScIGqSh0ovnfokCMcCTfweLukwWCkC8ivLOQfpOxA7aPOcgEgTqFJDRcG/phlbYYNRUv3sj82udI2UOyh2zOB5oxCB4PmtMdDtw4ONQSs1RzCKtyCNtOnOpUL8z8dZOZYXeLNQiGse7z5p1iKmF0CkOwFCyuKNlJPXw+ayFnrga06+LzqnXaBfefZ1RWNO7VonSmwHod/zWWGFPgY9JOMkYLZZMUzjIylixli9LxJBQmQKEJ7qaz0q1UQFKiCoPzI7F8slix4ou3WFrVInam4F6Mk95DMLqbTfYf2e4I9Kf0lDLFxKRSgCE18aBz3Vx0eTZI2FAWW4WxLCgxLDIi3j0YgFV2GAUqERQhdTrILmXJqSWxfHUeb/aoTNUpgkdJFPSGuWmsWISBZL20mHvlZLM42D/XWVY3DwUqUSqCglziNbcbWlIehoYFsRsSZdWjX1h4kcxeW2ZsA7GWo64DTQsHKW1TRVuCopUIqvfRWtiVpmPiz0HHklOi8sbiTWhVKZYUPmehx/JPEkDxZ2cILyuoiKOZw2L+JPD8eCwlhcyrfu5Rg+/x2/6uW/p+xmVCIaFTyVSr0M98Xg0MKdZDEWtWTY8SycQSKy2c4OOcAD4LMJhYKnuTZAE+NBjTyb/RDTnu5CuoryIBWBX0w1qX1gRp2QzlU6/xAHpk1kV6pIRXaNJPr/J/zbMx21EUOJrNBtae4GJrm2mp+29O+beqOdYidt8/yN8//nC62iGtl5D60Eimuf2HPGFj2w/Yo4GmH7jvvw217nGfQ8IO+EatZo4/5sZ5QhLUpOSNSaxRIAyHcEKNTRjE614/cX13G78gf1qFyz1YiTaDGQesBP839M4RtAYQfmx5n22EcztZpk7zmRdxEzkB1hFf737T703w0r6zos/wuGyeTV857rZxL4U/BTaPGm784hP3AibaIbFx6T7udaFIFvG9neVJkx1W6b17aaR6TUAxzuA9oymiajX39k+hI2FBRPPnLsIJNE3ou9CdCL1LQv/dO7fbXt8WcnHeB7BRNhGeJTHZ45KwiaC7toaHeZVh8ZNdxkaCMDHNJOrPA4YbpezigArZpOEgGHoGC8cPya6hk7A5NFnpajEGDItd6I0I3rh1Xnr5gExg1OzddUwVVJ3ZN07vR0DFtdPOUyo1fEKe3+WAPqZciMtKHLTyJCB42ZoO0XODR4X9GFGr+P2Bb9L9+Po8VPyu/pmOs0fTaT7cOFq/F2ej8M6Fq3XztLbLKHaLGXcAABEIDgS9HbmLFPRZvZIfBDromzgHF+kygn4C7JCqdDTRXLBqBjsbe+UrgxkHtgZ1lXm6LoQEirLwthoVOy/A9wKMZz77IG/WHcOCAIT3+H7Y6B5omSgfRnR0D+en/0anbr7DQxYAxzBXSTgxphIFRuYbFzHF6nBd+N7J+R7WPRIaBAiYgJi4v21VMtvStqk13KBCQUnOfrcKSyeEduOD+MpLZRGzWraNYF+fOPxKTr2wx+hH/uhM6pDFn2INvFCMGGrNLGngWvjhfN0EaCGhr/aDV0cMVdfDmTarYY+pgGiBlgqlHKhuFhXc2E626ZyaOCPbxXZkxzCe37m655zEncL9Bce6HHfRLkAgSzw6gfBmkXQwudGBTjH4zwSch291l/t/pOuz7TYhUUUahNO6OT5sjqsgWUMLkm4NHUNSLT1tQHjh2uKh2FVFsoJuUzCyUfw/fOzXw+uecX5IGZDfE0Qf5xk+njnqovbORxZgYWIhSkY8Ov8RQgOmeVBLdpQUYtOe0M1O3faY91GIWSgV3T1x2tKtjthXz3wYKkiZRc/fukHOgHDNmWLKLw0IMkEacBwy8sCAhzjrIE/Il5NH0BEZfuA3ylXhkGj1/VxfJ2jrDJGQIqqSIyDuTIhsjQ2hPBKhspyQzVuzt8/f/97Qdso6PUFJlM2PWF5aVpB1y+ZYeuCuZ0YbXkZ2QoUwgNIjgWHUp2unz6Ac2n0iUzCbVEmMUR5HrdbrVFfBfR9E57xQeX6hQBXv/OJKKNPyTEmqUztx461jJe2TljCMfMnLNl0Zk4sOZ8TvZcMW4UZnxGMTwi30v6jcMktO8xL0n3osSfo0PQ3c4MA7r3zVCJcTyrOMnS7yb9NamvZ2DzZD7cD+t+0x1i0RQU7g0Pb7LFvApTbueIhFO71dcLAMfOIDhNmfZTkd347i6ZNZRFo8StUD2YdF0U4jbyxwELVCn9g/IHEKMqSKG6RTtGWIlmEDoNC8zKZXZ2gPtG/qC1QVhU6eb6cLkDDaeBSZeCK8dqAhHgayWaCfo4Jt4lLdIBP77RuoMDySfhADUpHJHbstEQuBJu3AC3RId4eJxbmPZ6Ye3f78gkvSw9V3Y7HoG9uB/RPeJGu6LDkzzwChUXrs6QgSnypW05ssa060fMzX/PeB5xOLODEiS26Sn6KkMmoiRJrWXMTfe1ZWZtYS3hFxVF6H9ed4SuyBmzkgPvMPthmx3zuIyrdBKkIWYQOq965V9/cDuhf1NbUsAiL0eYRKAjouaNPpX63Jk4WXns5U0w7HEnCQb5yPb2ecjrsYslvw+wmyTWMLGFrfDmWiIZ3O4cuDEgxVNDEg1tBZdGNkPIWw/3JwpGIknFMSzQmSzcDbFZQSXSNV6c/g8JF34THLDNJnQ8Utb7zsNqzuN2h6W9ZLrCyJsK6YK9pohJ54qnLHcChnsWVWGYqNCmSAqF7BcMKjjfRJdZBd0CVyLtPUS2ywlUtuB+TTBBN/X3WggN3DOG4WcB44bc6XrRB2IgdQQtFrRMq83vM+Zz0oGPAXPeK7x6YTPwWA/RTJl6/rrbeHVC0cGxSZNS1E2lu1jYAt4h8fwsNRx2ETNVizS8LCIHrIYCLpGivYl1szOHPpOPUeUjCbhPS99Vo47gd0BfhmRSbYjHriBkf1/pVqiQyYfFfoVCEcAqncmqBY4xt19VRZFhweGjNsFBR61jSPtQ7NB3nbIrTC1wnb9FuXtBnVT/jdkM/mwzhfu74S4LI1o3ddbU/jmfKGYtDZWv6hW+A0hMPn5Tst8ZEUksiI8MYsH42EhobNxafpncFuDrcpMj0d3kTqNt26Zb9ZS31PCC6ERLFGN+7r1ufrfOC6YTppuZRAvIcC/xGfKNk96Puey/q/ggv0KJ1JyjU+w6flMEM0oCQdwaxV1TBlgdH5CdEFJDc4JRiym8k7pqEnnIXgftdVhSgH7QDxvvLTDh7HANkdCiaFyOEulWfLMCKtSKWf8t+0cWL9hkX20THBFHavag5UCTjUwvPzeuP8AIt2kb2vsVeqKtAROJQ1LqwIkVGTazCfjiHdVVcTxzBHGPeh2B/HjFvWQvFtTXpgCQr9+1c8a5O2jwHMPqJrG9wMHBdDZcpfBZqHmDAHJpZM8gInO4GzbmZPnntBlHp7p9GxC7x+M+yi2j6+DPdHgdsPcvSDAyhifuCoJFCJsS4Si/TKrV8+ZF9EZ4q5kXir6xFpa4CFYmda3Si9imaZB2tcZAdv74ExiJoOyAi3L1D8vd5uV3bsqxEB2I6fvRvKAS+zS2TUFciznyujotvng/ilLiWcCmWEpbgsPPDKj2KQ273InbmRzsQzclzrK+YDdPtLlGUjP/Y7i/w+I813EWK8zQFS2syeLwaOI/Vmv3QqZeuxC0mxCNpTtivVdvAn6I8vDI+JCi16SRDIZQr8QRbZOeYKIehq0FRR4dXbALmdjEesONV0WSZZ3LM4DjLhdPVHjORfG8khjZCkw403ukzKL5siE4IpCM1Cw0yDmeTEoYJ5N/7rW3UwqDPXdu96fVY9LmZyrJYAp9doSlm3OfTi5fjI/I4CTao4Nr66l8+2LWQ0MbklbQBjnvpN79AvN975Y3mLVuHIBk3hvBCkwPSGa1FUG6XrlzCiln8KB6txXQOqyqxuNZbvSKe3su+tnkQiE2X8qX+uACBGeILJjoAi9EnKjFRVv/CfjQpi1HT0yV89lr29SHKuzhcgmUQiGRa19ayUMruY40xuSfZgnaEF8E5/RzcH+MOnf6uz425pRHLTOxgDFP8u0nlqNjs6ZbBodks/1/vIbPQdPdURmvRnne2cimjQBgxwl1bojtQj4EMCcQoZbu0WOo/2zgnT590xN6I5voVERHEuvoJsdpDjQRU3WedK+E/1sEA0aGy4p71tZJT7w4PZhGkOKq4h+BI1zY/+aX7Su9lvWKyekCsuA7KWzEOqL34I3DYz91LF//jTRk/hXDpKEncBQ7NfBO12vO+Op2gB6xkAZs2oy4B4am00unCedaV4KkHvpgbzjr1iuxeFPygDtsewyXAZZAK70Oym+mdXXUev0lgQtRixCLynffW1fgcdNCQaIb2CUCCQuhzR4oiKT7ALwtup6Ie18B4YrFBqkjWz+NPLnU+zdw8yna59JMkYFl5biNTpruTfbEOVlfpJLsblML1xBDBYOSJdlWI0+2+31NTnIdk/+XPB59v3RQQTVH+YzZXV5NIAazeHQVeAVfJz8v+UWB8sADAEHaU9DigEOzYi2fld4ido0wAnC+RDD+T6xYRHdA74UX5KdQKm7lrkCcKNS1Ks0DKAAYIK9ItRBPKRDwAEBBcCHmJlGnog12sBR5wD5uGFXtErAMpWGJ1Av3Bbqyh2SVFwBijNFFDhyCUMgDRQspBqiy8erarPBPXau6dmC8iOqAfwpMLF+lsWkMhHnDq2sJiHZx91nqKLbFeKI+UAjGEEpFmvwBw1YRMMCICmjGTWJVjQfeQpw8xMYWmFnWui+W9lJRMnim8Tx5wb+Qg2hy+SDbUbkNEI+WsHyT9m6M/+/OJk388GE0UER3QO+GZFCGIGt9kdQXlYxEdy5ioLPGkMUVxGveYaAjLl7mlEB8UeFwzD3DgHvvhWbt4wF2Sicnuj07eoZlva+KAjEGSQZP9G9VxNWGT23iYQvvDXBxF6uDkSnwgkjLiMdkw/Qm4NawlzZhl/XIUligfL8M6xkPwihYd+ozruY5u7d/v/f6ds2X61rNxAagCrN551FKA9aIDmNT7H560KTW8Eh5dvMoGQEwowhGLCdaSPmZcCXQjnkfG3vMZoiT9XYPzGtfURyV0+b9iOtOp0wxcNeKzIhIxYvvDk971aIPEbTHLHGnOrWSDG0F9mvgNuK5zD9mZPoQbFPVJ+3XRPMjQ9aOifb9z2+/Sb2/f7j6VZ60NdZpyFzaq5tx+45owEtxrpvuvBo8Uvx84KI7qsnPWF+GlG+25wfzqFm6YGfD0ALrI2yajdNuuxFNs4k/ntY0MAanok5DYJsJWHv7UodTkyRh0JOtjX8g9+oHca5XFr3EwB/5sGelQ2BXMRxzmuod1C5Oi6zHDGAZhN/7gznWEHIq+CE8hk4wsjCjJIpFnV7Ao5oD0iazOyoYzyb5r4hHvJCk78x/HYwNkM8mI9tuq/oD7Se0sT0TqNy3onr5BTt+nkxQGLdEgzfXK5QL6hXs13B0LTFuX5d48B2XGdDHmoMBljnTUqOle0/YlUa+wWdDTG7WYKlQIAohTCLRChQoVKgTifwFeasq/uVuYzwAAAABJRU5ErkJggg==" alt="LogoF" /></a>
        </div>

        <div id="nav-bar-link">
        <router-link to="/pokemon" >About</router-link>
        <router-link to="/detail">Detail</router-link>
        <router-link to="/product">Product</router-link>
        <router-link to="/">List</router-link>
        
        </div>
     </div>
   
 
 </template>
 
 
 <style>
    
    div#nav-bar{
        background: #78E3FD;
        overflow: hidden;
        left:0;
        position: absolute; /* Set the navbar to fixed position */
        top: 0; /* Position the navbar at the top of the page */
        width: 100%; /* Full width */
        height: 5em;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    }

    img#logo{
        width: 120px;
        margin-left: 5%;
    }
    div#nav-bar{
        margin: auto;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        width: 100%;
    }
    div#nav-bar-logo{
        width: 50%;
    }
    div#nav-bar-link{
        width: 50%;
        margin-right: 5%;
        padding: 3em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
    }

    a{
        font-family: 'Varela';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;

        /* Negro/Negro1 */

        color: #292929;
        text-decoration: none;

    }
    



 </style>